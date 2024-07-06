import { useState } from "react"

type variationOptions = {
    field: { [key: string]: any },
    text: string,
    label: string,
    name: string,
    max_length?: number,
    placeHolder?: string,
    required?:boolean

}

const AddVariation = (options: variationOptions) => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        var type = options.field?.type
        if (type === 'string') {
            var field = <div className="w-full bg-white flex flex-col gap-3 p-3 border shadow max-h-fit">
                <label htmlFor={options.name} className="text-gray-500"> {options.label} </label>
                <input required={options.required ? true : false } type="text" placeholder={options.placeHolder} name={options.name} maxLength={options.max_length} className="w-full p-2 rounded bg-gray-100" />
            </div>


            setContent(field);

        } else if (type === 'number') {
            var field = <div className="w-full bg-white flex flex-col gap-3 p-3 border shadow max-h-fit">
                <label htmlFor={options.name} className="text-gray-500"> {options.label} </label>
                <input required={options.required ? true : false } type="number" placeholder={options.placeHolder} name={options.name} maxLength={options.max_length} className="w-full p-2 rounded bg-gray-100" />
            </div>


            setContent(field);
        }
    }

    const [content, setContent] = useState(<button onClick={onClick} className="w-full bg-white rounded-md shadow border p-3"> {options.text} </button>)

    return (<> {content} </>)
}

const ProductVariation = () => {


    return (

        <div className="lg:col-span-2 w-full bg-gray-50 border-r-0 p-3 border flex flex-col gap-3">
            <h1 className="text-lg text-center text-gray-500"> تخصيصات المنتج </h1>
            <div className="w-full grid lg:grid-cols-2 gap-3">
                <AddVariation  name="quantity" label="اضافة المخزون" text="اضافة المخزن" field={{ type: 'number' }} />
                <AddVariation name="quantity" label="اضافة لون" text="اضافة لون" field={{ type: 'string' }} />

            </div>
        </div>

    )
}


const AddProduct = () => {


    return (
        <form className="grid lg:grid-cols-6  gap-y-5 ">
            <div className="flex items-center justify-between p-3 lg:col-span-6 h-20 bg-white sticky top-0 border">
                <h1 className="text-xl lg:col-span-6 text-gray-500"> اضافة منتج جديد  </h1>
                <button className="bg-blue-500 p-3 px-6 rounded-md text-white">  حفظ </button>

            </div>

            <div className="lg:col-span-4 border">
                <div className="p-5 flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="text-gray-500"> اسم المنتج * </label>
                        <input required type="text" name="name" className="w-full bg-gray-100 p-3" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="description" className="text-gray-500"> وصف المنتج (اختياري) </label>
                        <textarea  name="description" id="" cols={30} rows={10} className="p-3 w-full bg-gray-100"></textarea>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="cost" className="text-gray-500">  تكلفة المنتج  * </label>
                        <input required type="number" name="cost" className="w-full bg-gray-100 p-3" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="cost" className="text-gray-500">  سعر البيع  * </label>
                        <input required type="number" name="cost" className="w-full bg-gray-100 p-3" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="unit" className="text-gray-500">  وحدة القياس  * </label>
                        <select required name="unit" id="" className="p-3 bg-gray-100 text-gray-500">
                            <option value=""> اختر وحدة القياس  </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="category" className="text-gray-500">  تصنيف المنتج  * </label>
                        <select required name="category" id="" className="p-3 bg-gray-100 text-gray-500">
                            <option value=""> اختر التصنيف  </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="brand" className="text-gray-500">  العلامة التجارية (اختياري) </label>
                        <select name="brand" id="" className="p-3 bg-gray-100 text-gray-500">
                            <option value="">  اختر العلامة التجارية  </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="manufacture" className="text-gray-500">   مصنع الشركة (اختياري)  </label>
                        <select name="manufacture" id="" className="p-3 bg-gray-100 text-gray-500">
                            <option value=""> اختر المصنع او الشركة  </option>
                        </select>
                    </div>
                </div>
            </div>
            <ProductVariation />
            <div className="flex items-center justify-right lg:col-span-6 p-3  ">
                <button className="bg-blue-500 p-3 px-6 rounded-md text-white">  حفظ </button>
            </div>
        </form>
    )

}

export default AddProduct