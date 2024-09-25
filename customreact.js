function customRender(reactElement,container){
    const domElemt=document.createElement(reactElement.type)
    domElemt.innerHTML=reactElement.children
    domElemt.setAttribute('href',reactElement.props.href)
    domElemt.setAttribute('target',reactElement.props.target)
    container.appendChild(domElemt)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

