function header(){
    let header= document.createElement('header');
header.innerText="Melanie-";
header.className="header";

    let div=document.createElement('div');
    div.className="div";
    header.appendChild(div);

 //src
    let img=document.createElement('img')
    img.className="img";
    img.src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F33100000%2FSnoopy-wallpaper-snoopy-33124746-1024-768.jpg&f=1&nofb=1&ipt=e69db4ac8334cde500871b5d52a0bfa8ef1789559966713748f725fd07e2124f"
    div.appendChild(img);
    return header;
    
}
export {header}