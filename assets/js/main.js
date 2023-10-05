


let grid_container = document.querySelector('.grid-container');
let sideNav = document.querySelector('.sidenav');
let btn_nav_toggle = document.querySelector('.btn_nav_toggle');
if(btn_nav_toggle){
    btn_nav_toggle.addEventListener('click',()=>{
        if(sideNav.classList.contains('on')){
            sideNav.classList.remove('on');
        }else{
            sideNav.classList.add('on');
        }
    })
}





let nav_item = document.querySelectorAll('.nav_item');
let nav_btn = document.querySelectorAll('.nav .btn_dep1');
let nav_dep2 = document.querySelectorAll('.nav .btn_dep1');
nav_btn.forEach(e=>{
    e.addEventListener('click',e=>{
        let parent_li = e.target.closest('.nav_item');
        
        if(parent_li.classList.contains('on')){
            
            parent_li.classList.remove('on');
        }else {
            nav_item.forEach(e=>{
                e.classList.remove('on');
            });
            parent_li.classList.add('on');
        }     
    });
});




// datepicker
$.datepicker.regional['ko'] = {
    closeText: '닫기',
    prevText: '이전달',
    nextText: '다음달',
    currentText: '오늘',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    weekHeader: 'Wk',
    dateFormat: 'yy-mm-dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    changeMonth: true,
    changeYear: true
};
$.datepicker.setDefaults($.datepicker.regional['ko']);

$(".inp_date").datepicker({
    //showOn: "button",
    //buttonImage: "../img/ico_calendar1.svg",
    //buttonImageOnly: true,
    //showButtonPanel: true
});
    
function set_today(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_start.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_7d(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_start.datepicker('setDate', '-7D'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_1m(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_start.datepicker('setDate', '-1M'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_3m(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_start.datepicker('setDate', '-3M'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_6m(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_start.datepicker('setDate', '-6M'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_1y(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_start.datepicker('setDate', '-1Y'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}







// // tab nav
// let initial_slide = $('.tab_nav_item.on').index();   
// let ac_slide_main = new Swiper('.tab_nav_list',{   
//     slidesPerView: "auto",
//     //freeMode: true,
//     initialSlide:initial_slide,
//     //spaceBetween: 10,
//     navigation: {
//         nextEl: ".tab_nav_next",
//         prevEl: ".tab_nav_prev",
//     }
// });
// $(window).on('load',function(){
//     tab_slide_reload()
// });


// // [D] 탭 삭제
// function del_tap(target){
//     let $this = $(target);
//     let $this_tab = $this.parents('.tab_nav_item');
//     let $tab_length = $('.tab_nav_item').length;
    
//     if($this_tab.hasClass('on')){
//         if($this_tab.index() + 1 < $tab_length){
//             $this_tab.next('.tab_nav_item').addClass('on');
//             //[D] 다음 페이지 불러오기

//             //
//         }else{
//             $('.tab_nav_item').eq(0).addClass('on');
//             //슬라이드 reload
//             tab_slide_reload()
//             //[D] 첫 페이지 불러오기

//             //
//         }
        
//     }
//     $this.parents('.tab_nav_item').remove();

    
// }

// // [D] 탭 클릭 (페이지로드)
// function tab_load(target){
//     let $this = $(target);
//     let $this_tab = $this.parents('.tab_nav_item');
//     $this_tab.addClass('on').siblings().removeClass('on');

//     //[D] 선택된 페이지 불러오기

//     //
//     //tab_slide_reload()
// }

// //슬라이드 reload
// function tab_slide_reload(){
//     initial_slide = $('.tab_nav_item.on').index();
//     ac_slide_main.update();
//     ac_slide_main.slideTo(initial_slide,400,false)
// }





function open_file(target){
    let $this = $(target);
    let $input_file = $this.parents('.file_box').find('.f_hidden');
    $input_file.trigger('click');
}

function select_file(target){
    let $this = $(target);
    let $val = $this.val();
    let $file_box = $this.parents('.file_box');
    let $input_txt = $file_box.find('.f_input');

    
    if($val){
        $input_txt.val($val);
        $file_box.addClass('hasFile');
        let $idx = $file_box.data('val');
        let $del_chk = $(`.del_chk${$idx}`);

        $del_chk .val($idx);
    }
}

function del_file(target){
    let $this = $(target);
    let $file_box = $this.parents('.file_box');
    let $input_file = $file_box.find('.f_hidden');
    let $input_txt = $file_box.find('.f_input');
    
    $file_box.removeClass('hasFile');
    $input_file.val(null);
    $input_txt.val(null);

    let $idx = $file_box.data('val');
    let $del_chk = $(`.del_chk${$idx}`);
    $del_chk .val($idx);
}

function del_thumbnail_file(target) 
{
    let $this = $(target);
    let $file_box = $this.parents('.file_box');
    let $input_file = $file_box.find('.f_hidden');
    let $input_txt = $file_box.find('.f_input');
    
    $file_box.removeClass('hasFile');
    $input_file.val(null);
    $input_txt.val(null);

    let $idx = $file_box.data('val');
    let $del_chk = $(`.del_chk${$idx}`);
    $('.delete_thumbnail').val("Y");
}


function add_form(max){
    let $file_set = `<div class="file_set file_num">
        <div class="file_box">
            <input type="file" name="files[]" class="f_hidden" onchange="select_file(this);return false;">
            <input type="text" class="f_input ty_mid" placeholder="파일을 선택해주세요." onclick=" open_file(this);return false;" readonly>
            <button class="btn_del" onclick=" del_file(this);return false;"><span class="blind">파일삭제</span></button>
        </div>
        <button class="btn_remove" onclick="del_form(this);return false;"><span class="blind">행 삭제</span></button>
    </div>`
    let $file_wrap = $('.file_wrap');
    let $length = $file_wrap.find('.file_set').length;
    if($length >= max){
        alert(`첨부파일은 최대 ${max}개 까지 등록 가능합니다.`)
    }else{
        $file_wrap.append($file_set);
    }
}

function del_form(target){
    let $this = $(target);
    let $file_set = $this.parents('.file_set');
    let $file_box = $file_set.find('.file_box');
    
    let $idx = $file_box.data('val');
    let $del_chk = $(`.del_chk${$idx}`);
    console.log($idx);
    $del_chk .val($idx);


    $file_set.remove();
    
}


function close_popup(target){
    let layer_popup = target.closest('.layer_popup');
    let layer_popup_cont = target.closest('.layer_popup');
    layer_popup.classList.remove('on');
}

let layer_popup_cont = document.querySelectorAll('.layer_popup_cont');
layer_popup_cont.forEach(e=>{
    e.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
});



function open_popup(target){
    let layer_popup = document.querySelector(`.layer_popup.${target}`);
    //console.log(layer_popup);
    layer_popup.classList.add('on');
}

function reset(target){
   let this_form  = target.closest('form');
   this_form.reset();
}

let btn_back = document.querySelector('.btn_back');
if (btn_back && !document.referrer ) { 
    btn_back.style.display = 'none';
}


let btn_disable = document.querySelectorAll('.f_btn.disable');
btn_disable.forEach(e=>{
    e.addEventListener('click',(e)=>{
        e.preventDefault()
    })
});



function num_down(target){
    let inputNum = $(target).siblings('.f_input');
    let currentVal = parseInt(inputNum.val());
    let newVal = currentVal - 1;
    if(newVal < 0){
        return false;
    }else {
        inputNum.val(newVal);
    }
    
    //console.log(newVal);
    
}
function num_up(target){
    let inputNum = $(target).siblings('.f_input');
    let currentVal = parseInt(inputNum.val());
    let newVal = currentVal + 1;
    inputNum.val(newVal);
    //console.log(newVal)
}


/* 카운트 이벤트 */

// let delay = 300;
// let delay2 = 500;
// let dur = 500;
// let dur2 = 700;


// function count_wrap(target){
//     target.each(function(i){
//         //$(this).width($(this).width());
//         if($(this).hasClass('percent')){
//             $(this).delay(delay2 + 300).animate(
//                 {
//                     Counter: $(this).data('value'),
//                 },
//                 {
//                     duration: dur2,
//                     easing: 'swing',
//                     step: function (now) {
//                         $(this).html(now.toFixed(1));
//                     },
//                 }
//             );
//         }else{
//             $(this).animate(
//                 {
//                     Counter: $(this).data('value'),
//                 },
//                 {
//                     duration: 1000,
//                     easing: 'swing',
//                     step: function (now) {
//                         $(this).html( commaSeparateNumber(Math.ceil(now)) );
//                     },
//                 }
//             );
//         }
//     });
// }

// /* 콤마찍기 */
// function commaSeparateNumber(val){
//     while (/(\d+)(\d{3})/.test(val.toString())){
//       val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
//     }
//     return val;
// }





// $(function(){
//     let count_box = $('.count');
//     /* 카운트박스 영역 잡기 */

//     $('.sizing_box').each(function(){
//         let count_box = $(this).parents('.count');
//         let count_val = count_box.data('value');
//         let count_val_comma =  commaSeparateNumber(count_val);
//         $(this).html(count_val_comma);
//         //console.log(count_val_comma);

//         // let width = $(this).width();
//         // $(this).parents('.count').width(width);
//     });
//     $(window).on('load',function(){
//         count_wrap(count_box)
//     });
    
// });

function f_alert_open() {
    document.querySelector('.f_alert_box').classList.add('on');
}

function f_alert_close() {
    document.querySelector('.f_alert_box').classList.remove('on');
}

function f_alert_chk(target) {
    let alert_box = document.querySelector('.f_alert_box');
    let alert_item = document.querySelectorAll('.f_alert_item');
    let read_item = document.querySelectorAll('.f_alert_item.read');
   
    
        
    if(target.checked == true){
        read_item.forEach((e)=>{
            e.style.display = 'none';
        });
        if(alert_item.length == read_item.length){
            alert_box.classList.add('all_read');
        }
    }else{
        alert_box.classList.remove('all_read');
        read_item.forEach((e)=>{
            e.style.display = 'block';
        });
    }
    
    
}

function branch_toggle(){
    let footer_right_branch = document.querySelector('.footer_right_branch');
    if(footer_right_branch.classList.contains('on')){
        footer_right_branch.classList.remove('on')
    }else{
        footer_right_branch.classList.add('on')
    }
}

