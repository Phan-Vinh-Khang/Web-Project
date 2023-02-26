// start buy ticket
const BtnBuyTickets = document.getElementsByClassName('js-btn-tickets');
        const BlockModal = document.querySelector('.Modal'); //chỉ cần block có 1 class thì sẽ return dc block đó(ko cần fullclassname của block)
        for (const i of BtnBuyTickets) {
            i.addEventListener('click', ShowModal);
        }
        function ShowModal() {
            BlockModal.classList.add('open');
        }
        function CloseModal() {
            BlockModal.classList.remove('open');
        }
        BlockModalClose = document.querySelector('.modalclose');
        //ModalClose=document.querySelector('.fa-times');
        BlockModalClose.addEventListener('click', CloseModal)
        BlockModalClose2 = document.querySelector('.modal');
        BlockModalClose2.addEventListener('click', CloseModal);
        const blockform1 = document.querySelector('.form1');
        blockform1.addEventListener('click', function (event) {
            event.stopPropagation();
        })
// end buy ticket

// start responsive
var blockiconmenu = document.getElementById('block-mb-menu');
var blocknavmb = document.getElementById('nav');
var blockheadermb = document.getElementById('header');
var default_height_header = blockheadermb.style.height;
blockiconmenu.onclick = function () {
    if (blocknavmb.style.display == 'none') {
        blocknavmb.style.display = 'block';
        blockheadermb.style.height = 'auto';
    }
    else {
        blocknavmb.style.display = 'none';
        blockheadermb.style.height = default_height_header;
    }
    w++;
}
var pc = true;
var mb = true;
var w = setInterval(function () {
    if (pc) {
        if (blockheadermb.clientWidth > 600) {
            blocknavmb.style.display = 'inline-block';
            blockheadermb.style.height = default_height_header;
            pc = false;
            mb = true;
        }
    }
    else {
        if (blockheadermb.clientWidth <= 600) {
            blocknavmb.style.display = 'none';
            pc = true;
            mb = false;
        }
    }
}, 10);
var listmenuitem = document.querySelectorAll('#nav>li>a')
for (var i = 0; i < listmenuitem.length - 1; i++) {
    listmenuitem[i].onclick = function () {
        if (blockheadermb.clientWidth <= 600) {
            blocknavmb.style.display = 'none';
            blockheadermb.style.height = default_height_header;
            w++;
        }
    }
}