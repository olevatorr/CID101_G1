<script setup>
import { ref, onMounted } from 'vue'

// 對比照動畫
const comparationArea = ref(null)
const control = ref(null)
const dirty = ref(null)

const startDrag = (event) => {
    event.preventDefault()
    const startX = event.clientX || event.touches[0].clientX
    const startLeft = control.value.offsetLeft

    const handleDrag = (event) => {
        const deltaX = (event.clientX || event.touches[0].clientX) - startX
        const newLeft = startLeft + deltaX
        const progress = Math.max(0, Math.min(1, newLeft / comparationArea.value.offsetWidth))

        control.value.style.left = `${progress * 100}%`
        dirty.value.style.width = `${progress * 100}%`
    }

    const stopDrag = () => {
        document.removeEventListener('mousemove', handleDrag)
        document.removeEventListener('mouseup', stopDrag)
        document.removeEventListener('touchmove', handleDrag)
        document.removeEventListener('touchend', stopDrag)
    }

    document.addEventListener('mousemove', handleDrag)
    document.addEventListener('mouseup', stopDrag)
    document.addEventListener('touchmove', handleDrag)
    document.addEventListener('touchend', stopDrag)
}

onMounted(() => {
    control.value.addEventListener('mousedown', startDrag)
    control.value.addEventListener('touchstart', startDrag)
})

</script>

<template>
    <section class="section section-comparation">
        <div class="container">
            <h3>
                COMPARATION<br>
                對比照
            </h3>
        </div>
        <div ref="comparationArea" class="comparation-area">
            <div ref="control" class="control"></div>
            <div ref="dirty" class="dirty">
                <img src="/img/index/compare-dirty.png" alt="垃圾海洋" @dragstart.prevent>
            </div>
            <div class="clean">
                <img src="/img/index/compare-clean.png" alt="乾淨海洋" @dragstart.prevent>
            </div>
        </div>
    </section>
</template>