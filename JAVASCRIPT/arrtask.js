let arr = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "../../IMAGE/js/download1.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "../../IMAGE/js/download2.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "../../IMAGE/js/download3.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "../../IMAGE/js/download4.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "../../IMAGE/js/download5.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "../../IMAGE/js/download6.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "../../IMAGE/js/download7.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "../../IMAGE/js/download8.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "../../IMAGE/js/download9.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "../../IMAGE/js/download10.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "../../IMAGE/js/download11.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "../../IMAGE/js/download12.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "../../IMAGE/js/download13.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
        "albumId": 1,
        "id": 14,
        // "title": "est necessitatibus architecto ut laborum",
        "url": "../../IMAGE/js/download14.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
        "albumId": 1,
        "id": 15,
        // "title": "harum dicta similique quis dolore earum ex qui",
        // "url": "../../IMAGE/js/download15.jpeg",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    }];
let filarr=arr.filter((e)=>e.url!=undefined  && e.title!=undefined)
let cont = document.getElementById("cont")
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function () {
    for (let i = 0; i < filarr.length; i++) {
            let shellElem = document.createElement("div");
            cont.append(shellElem);
            let imgTag = document.createElement("img");
            shellElem.append(imgTag);
            imgTag.setAttribute("src", filarr[i].url);
            let titleElem = document.createElement("h2");
            shellElem.append(titleElem);
            titleElem.innerText = filarr[i].title;

            //css
            cont.classList.add("body");
            shellElem.classList.add("divElem");
            imgTag.classList.add("imgElem");
            titleElem.classList.add("titleElem");
        }

})