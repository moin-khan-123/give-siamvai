const banner=` <div class="custom-banner-moin">
      <img src="./assets/images/TM0B5P75H-U05HZC8RN8Z-1441083e694d-512.png" alt="" />
      <img src="./assets/images/TM0B5P75H-U05LRHKC690-4acfca96ce10-512.png" alt="" />
      <img src="./assets/images/TM0B5P75H-U05NTBADANQ-f52a5e377f02-512.jpg" alt="" />
      <img src="./assets/images/TM0B5P75H-UMBQDQ9RB-709bb6025756-512.jpg" alt="">
    </div>`

    class header extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback(){
            this.innerHTML=banner;
        }
    }

    customElements.define("custom-heading",header)
    