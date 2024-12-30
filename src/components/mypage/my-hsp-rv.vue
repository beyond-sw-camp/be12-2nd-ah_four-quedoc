<!-- 리뷰목록 -->
<template>


    <template v-if="store.list.length">
        <!-- list -->
        <div class="customer-list">
            <v-list>
                <v-list-item v-for="item in store.list" :key="item.forumIdentity">
                    <div class="item-content">
                        <div class="text-16 text-truncate mb-2">
                            {{ item.forumTitle }}
                        </div>
                        <v-rating hover :length="5" :size="32" half-increments readonly :model-value="item.forumRating"
                            active-color="primary" />
                        <div class="text-row text-14">
                            <template v-if="!!item.registDateTime">
                                <div class="date">
                                    {{ item.registDateTime, 'YYYY.MM.DD HH:mm' }}
                                </div>
                            </template>
                            <v-divider vertical />
                            <div class="id">{{ item.registUserId?.split('@')[0] }}</div>
                            <v-btn class="rvBtn" variant="outlined" size="x-small"
                                @click="toggleVisibility(item)">댓글달기</v-btn>
                        </div>
                            <v-textarea clearable class="mx-2" label="    "   v-if="item.isVisible" prepend-inner-icon="mdi-comment" auto-grow
                                rows="1"></v-textarea>
                    </div>
                </v-list-item>
            </v-list>
        </div>
        <!--// list -->
    </template>
    <template v-else-if="!store.results">
        <!-- list - 검색결과없음 -->
        <div>
            <v-divider class="svc-divide" />
            <div class="search-result">
                <div class="text">검색 결과</div>
                <div class="desc">검색된 결과가 없습니다.</div>
            </div>
            <div class="btn-list">
                <v-btn color="primary" rounded="lg" size="x-large" variant="flat" @click="$router.go(0)">목록
                </v-btn>
            </div>
        </div>
        <!--// list - 검색결과없음 -->
    </template>

    <popUpAlert :dialog-info="popUpAlertInfo" @confirm-event="movePage" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import popUpAlert from '../etc/pop-up/pop-up-alert.vue'


//라우터 정보 객체
const router = useRouter()

const toggle = ref(false);

const wT = () => {
    toggle.value = !toggle.value;
    console.log(toggle.value);
}

const store = reactive({
    list: [
        {
            forumIdentity: 1,
            forumRating: 1,
            forumTitle: "불친절해요", // 제목
            registDateTime: "2024-12-28", // 등록 시간 (ISO 형식)
            registUserId: "user1@example.com", // 등록 사용자 ID
            isVisible: false,
        },
        {
            forumIdentity: 2,
            forumRating: 4.5,
            forumTitle: "의사선생님이 잘생겼어요", // 제목
            registDateTime: "2024-12-27", // 등록 시간
            registUserId: "user2@example.com", // 등록 사용자 ID
            isVisible: false,
        },
        {
            forumIdentity: 3,
            forumRating: 2,
            forumTitle: "애기 먹일려고 미역국달라고 했는데 안주네요 비추", // 제목
            registDateTime: "2024-12-26", // 등록 시간
            registUserId: "devmaster@example.com", // 등록 사용자 ID
            isVisible: false,
        },
        {
            forumIdentity: 4,
            forumRating: 5,
            forumTitle: "탈모가 나았습니다", // 제목
            registDateTime: "2024-12-25", // 등록 시간
            registUserId: "projectlead@example.com", // 등록 사용자 ID
            isVisible: false,
        },
        {
            forumIdentity: 5,
            forumRating: 3,
            forumTitle: "리뷰이벤트", // 제목
            registDateTime: "2024-12-05", // 등록 시간이 없는 경우도 처리 가능
            registUserId: "jspro@example.com", // 등록 사용자 ID
            isVisible: false,
        },
    ],
});


//popUpAlert 정보 객체
let popUpAlertInfo = reactive({
    toggle: false,
    text: '',
    url: ''
})
const toggleVisibility = (item) => {
    item.isVisible = !item.isVisible;
};


/**
 * 페이지 이동
 *
 * 로그인 페이지로 이동한다.
 */
const movePage = (url) => {
    if (url) {
        router.push({ name: url })
    }
}

/**
 * 컴포넌트 마운트
 *
 * 토론장 리스트를 조회한다.
 */
onMounted(() => {

})
</script>
<style scoped>
.rvBtn {
    margin-left: 3rem;
    min-height: 3rem;
}
.mx-2 {
    margin-top: 3rem;
}
</style>