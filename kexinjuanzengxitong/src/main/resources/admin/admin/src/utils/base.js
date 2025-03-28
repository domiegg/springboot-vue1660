const base = {
    get() {
        return {
            url : "http://localhost:8080/kexinjuanzengxitong/",
            name: "kexinjuanzengxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kexinjuanzengxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "可信捐赠系统"
        } 
    }
}
export default base
