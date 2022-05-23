# 复旦南区选餐脚本

## 如何使用

安装 Chrome 扩展插件 [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)，选择添加新脚本，并将 ```script.js``` 中的所有内容复制到编辑器中，修改 ```config``` 中的除 ```debug``` 外各个字段为你的个人信息，按 Ctrl + S 保存即可。请检查你的脚本是否被启用。

以下为样例 config：

```typescript
const config = {
    debug: false, // 这条不用修改
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
```

## 如何测试脚本能否使用

修改 ```config``` 中的 ```debug``` 字段为 ```true```，保存，并在选餐时段外访问 <https://f.wps.cn/w/BBOW4qdu/> 。此时脚本会按你的个人信息试图帮你再填一份，若各信息填写正确并提交即为正常运行。记得将 ```debug``` 字段重新设为 ```false``` 。
