/**
 * create by zhangxiang on 2020-12-31 10:31
 * 类注释：拖拽修改dialog大小
 * 备注：
 <el-dialog
 title="提示"
 v-draggable
 v-dialogSize
 :visible.sync="dialogVisible"
 width="30%">
 */
export default {
    bind(el) {
        const dragDom = el.querySelector('.el-dialog');
        const lineEl = document.createElement('div');
        lineEl.style =
            'width: 6px; background: inherit; height: 6px; position: absolute; right: 0; bottom: 0; margin: auto; z-index: 1; cursor: nwse-resize;';
        lineEl.addEventListener(
            'mousedown',
            function (e) {
                // 鼠标按下，计算当前元素距离可视区的距离
                const disX = e.clientX - el.offsetLeft;
                const disY = e.clientY - el.offsetTop;

                // 当前宽度 高度
                const curWidth = dragDom.offsetWidth;
                const curHeight = dragDom.offsetHeight;

                document.onmousemove = function (e) {
                    e.preventDefault(); // 移动时禁用默认事件

                    // 通过事件委托，计算移动的距离
                    const xl = e.clientX - disX;
                    const yl = e.clientY - disY

                    dragDom.style.width = `${curWidth + xl}px`;
                    dragDom.style.height = `${curHeight + yl}px`;
                };

                document.onmouseup = function (e) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            },
            false
        );
        dragDom.appendChild(lineEl);
    }
}
