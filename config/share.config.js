import { initShareInfo } from '../assets/js/share';

/*初始化分享*/
function initShare(link,title,desc,img,fn) {
    const shareConfig = {
        link:link,
        title: title,
        desc: desc,
        img_url: img,
        img_width: 80,
        img_heigth: 80
    };
    initShareInfo(shareConfig.title, shareConfig.desc, shareConfig.img_url, shareConfig.link, fn);
}

initShare("", "", "", "", onSuccess);

function onSuccess() {}