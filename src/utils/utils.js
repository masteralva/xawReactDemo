export default {
    formatDate(time){
        if(!time) return '';
        let date = new Date(time)
        let H = date.getHours()
        let M = date.getMinutes()
        let S = date.getSeconds()
        if(H<10){
            H = '0'+H
        }
        if(M<10){
            M = '0'+M
        }
        if(S<10){
            S = '0'+S
        }
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'  '+H+':'+M+':'+S
    },
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total: data.result.total_count,
            showTotal:()=>{
                return `共${data.result.total_count}条`
            },
            showQuickJumper:true
        }
    },
}