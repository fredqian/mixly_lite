layui.use('element', function () {
    var element = layui.element;
});
layui.use('layer', function(){
    var layer = layui.layer;
});


function new_file(){
    layer.confirm(MSG['confirm_newfile'], {
        title:false,
        btn: [MSG['newfile_yes'], MSG['newfile_no']] 
        ,btn2: function(index, layero){
            layer.close(index);
        }
    }, function(index, layero){
        mixlyjs.createFn();
        layer.close(index);
    });
}
function open_language(){
    layer.confirm(MSG['choose_language'], {
        title:false,
        btn: ['简体中文', '繁体中文', 'English'] 
        ,btn3: function(index, layero){
            Code.changeLanguage_en();
        }
    }, function(index, layero){
        Code.changeLanguage_zh_hans();
    }, function(index){
        Code.changeLanguage_zh_hant();
    });
}
function open_theme(){
    layer.confirm(MSG['choose_theme'], {
        title:false,
        btn: ['Dark', 'Light'] 
        ,btn2: function(index, layero){
            localStorage.Theme = 'Light';
            Code.changeEditorTheme_light();
        }
    }, function(index, layero){
        localStorage.Theme = 'Dark';
        Code.changeEditorTheme_dark();
        layer.close(index);
    });
}

//Demo
layui.use('form', function(){
var form = layui.form;

//监听提交
form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
});
});