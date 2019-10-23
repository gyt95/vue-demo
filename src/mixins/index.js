export const notices = {
    data(){
        return{
            loadingNotice: null
        }
    },
    methods:{
        loadingExcel(){
            this.loadingNotice = this.$notify({
                title: '提示',
                message: '正在加载文档，请稍候...',
                duration: 0
            })

            setTimeout(()=>{
                this.loadingNotice.close()
                this.successNotice = this.$notify({
                    title: '提示',
                    message: '加载已完成，可进行导出操作',
                    type: 'success'
                })
            }, 3000)
        },
        showDownloadBtn(){

        }
    }
}