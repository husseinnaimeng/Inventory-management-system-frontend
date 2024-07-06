const fontSont_sizes:{[key:string]:any} = {
    xs:{
        fontSize:'12px',
        lineHeight:'16px',
    },
    sm:{
        fontSize:'14px',
        lineHeight:'16px',
    },
    base:{
        fontSize:'16px',
        lineHeight:'24px',
    },
    lg:{
        fontSize:'18px',
        lineHeight:'28px',
    },

}





function fontSet_font_size(){

    var value = localStorage.getItem("fontSize");

    if(value !== null ){

        try{
            return fontSont_sizes[value];
        }catch{
            localStorage.setItem("fontSize",'sm')
            return fontSont_sizes['sm']
        }
        
    }else{
        localStorage.setItem("fontSize",'sm')
        return fontSont_sizes['sm']
    }


    
    
}

const fontSont_size = fontSet_font_size();
export default  fontSont_size;