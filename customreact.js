// function definition 
// step 1:
 function customRender(reactElement,container){
//     const domElemt=document.createElement(reactElement.type)
//     domElemt.innerHTML=reactElement.children
//     // here the problem is that we are adding 1 1 attribute seperately so instead 
//     // of adding each attribute seperately we will use loop base approach check next commit or repo 
//     domElemt.setAttribute('href',reactElement.props.href)
//     domElemt.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElemt)
// }
// step 2:
const domElemt=document.createElement(reactElement.type);
domElemt.innerHTML=reactElement.children
for (const prop in reactElement.props) {
    if (prop==='children') continue; 
        domElemt.setAttribute(prop,reactElement.props[prop]);
        
}
    container.appendChild(domElemt)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
 const mainContainer=document.querySelector('#root')
// here the custom render function is used to inject the element the customRender 
// into the root so we are using a function custom render it is  what element to be injected and where it should be injected
customRender(reactElement,mainContainer)

