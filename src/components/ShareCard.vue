<template>
    <div class="event-card">
        <div class="pic">
            <img :src="imageUrl" />
        </div>
        <div class="text">
            <div class="theme">
                <div class="event-name">
                    <h3>{{ title }}</h3>
                </div>
                <div class="report">
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
            <span>{{ place }}</span>
            <span>{{ date }}</span>
            <span>{{ share }}</span>
            <span>{{ exp }}</span>
            <p class="Thoughts">
                {{ thoughts }}
                <a href="#">閱讀更多</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShareCard',
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        share: {
            type: String,
            required: true
        },
        exp: {
            type: String,
            required: true
        },
        thoughts: {
            type: String,
            required: true
        }
    }
}
</script>