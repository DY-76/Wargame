function getLeft(o) {
    return o.style.left.replace('px', '');
}

function getTop(o) {
    return o.style.top.replace('px', '');
}

// 이미지 움직이기
function moveDrag(e) {
    var e_obj = window.event ? window.event : e;
    var dmvx = e_obj.clientX + img_L;
    var dmvy = e_obj.clientY + img_T;
    targetObj.style.left = dmvx + "px";
    targetObj.style.top = dmvy + "px";
    // console.log(e_obj.clientX, e_obj.clientY, img_L, img_T)
    return false;
}

// 드래그 시작
function startDrag(e, obj) {
    console.log("Drag ST")
    targetObj = obj;
    var e_obj = window.event ? window.event : e;
    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;

    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;
    if (e_obj.preventDefault) e_obj.preventDefault();
}

// 드래그 멈추기
function stopDrag() {
    gridMapLoad();
    document.onmousemove = null;
    document.onmouseup = null;
}

function startWheel(e, obj) {
    console.log("wheel ST")
    targetObj = obj;
    let e_obj = e;
    // console.log(e_obj.deltaY, e_obj.offsetX, e_obj.offsetY)
    let nowScale = Number(window.getComputedStyle(targetObj).transform.match(/matrix.*\((.+)\)/)[1].split(', ')[0]);
    let preScale = Number(nowScale - (e_obj.deltaY / 500));
    // console.log(preScale, e_obj.target.id);

    targetObj.style.transformOrigin = e_obj.offsetX + "px "+ e_obj.offsetY+ "px";

    if(0.8<preScale && preScale<7){
        console.log(preScale);
        targetObj.style.transform = "scale(" + preScale + ")";
    } else {
        targetObj.style.transform = "scale(" + nowScale + ")";
    }

    if (e_obj.preventDefault) e_obj.preventDefault();

    gridMapLoad();
}