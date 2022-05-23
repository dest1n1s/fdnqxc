// ==UserScript==
// @name         复旦南区选餐
// @namespace    https://dest1n1s.com/
// @version      1.0.0
// @description  南区选餐脚本
// @author       Dest1n1
// @include      *https://f.kdocs.cn/w/BBOW4qdu/*
// @include      *https://f.wps.cn/w/BBOW4qdu/
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @run-at       document-end
// @noframes
// ==/UserScript==

const config = {
    debug: false,
    name: "张三",
    uis: "20301010001",
    phone: "18012345678",
    breakfast: "套餐A",
    lunch: "套餐A",
    dinner: "套餐A",
    district: "邯郸-南区D区",
    building: "7号楼",
    floor: "1楼",
    room: "102"
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const wait = async(selector) => {
    console.log($(selector));
    if (!$(selector).length) {
        await sleep(100);
        await wait(selector);
    }
    return $(selector);
}

(async function() {
    'use strict';
    if (config.debug) {
        await wait('span:contains("修改内容")');
        await sleep(500);
        $('span:contains("修改内容")').css("text-decoration", "underline").click();
        await sleep(1000);
    } else {
        await wait('span:contains("再填一份")');
        await sleep(500);
        $('span:contains("再填一份")').css("text-decoration", "underline").click();
        await sleep(1000);
    }

    await wait('span:contains("邯郸-南区B区")');
    $($('textarea').not('.ant-input-disabled')[0]).css("text-decoration", "underline").focus().val(config.name).blur();
    $($('textarea').not('.ant-input-disabled')[1]).css("text-decoration", "underline").focus().val(config.uis).blur();
    $($('input')[0]).css("text-decoration", "underline").focus().val(config.phone).blur();

    if(!config.debug){
        await wait(`span:contains("${config.district}")`);
        $(`span:contains(${config.district})`).css("text-decoration", "underline").click();
    }

    await wait('div[title="南区"]');
    $('div[title="南区"]').css("text-decoration", "underline").click();
    await wait(`div[title="${config.building}"]`);
    $(`div[title="${config.building}"]`).css("text-decoration", "underline").click();
    await wait(`div[title="${config.floor}"]`);
    $(`div[title="${config.floor}"]`).css("text-decoration", "underline").click();
    await wait(`div[title="${config.room}"]`);
    $(`div[title="${config.room}"]`).css("text-decoration", "underline").click();
    await wait('span:contains("不预订")');
    $('span:contains("不预订")').css("text-decoration", "underline").click();
    await sleep(100)
    $('span:contains("预订")').not(':contains("不预订")').css("text-decoration", "underline").click();
    await wait('span:contains("套餐A")');
    $('textarea:contains("南区早餐")').parent().parent().parent().find('span:contains("' + config.breakfast + '")').css("text-decoration", "underline").click();
    $('textarea:contains("南区午餐")').parent().parent().parent().find('span:contains("' + config.lunch + '")').css("text-decoration", "underline").click();
    $('textarea:contains("南区晚餐")').parent().parent().parent().find('span:contains("' + config.dinner + '")').css("text-decoration", "underline").click();
    await wait('span:contains("标准（默认）")');
    $('span:contains("标准（默认）")').css("text-decoration", "underline").click();
    if (!config.debug) {
        await wait('span:contains("上述注意事项")');
        $('span:contains("上述注意事项")').css("text-decoration", "underline").click();
    }
    await wait('span:contains("提交")');
    $('span:contains("提交")').css("text-decoration", "underline").click();
    await sleep(500)
    await wait('span:contains("确定")');
    $('span:contains("确定")').css("text-decoration", "underline").click();
})();
