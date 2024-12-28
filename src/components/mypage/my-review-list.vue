<!-- 리뷰목록 -->
<template>
    

            <template v-if="store.list.length">
                <!-- list -->
                <div class="customer-list">
                    <v-list>
                        <v-list-item
                            v-for="item in store.list"
                            :key="item.forumIdentity"
                            @click="handleListClick(item.forumIdentity)"
                        >
                            <div class="item-content">
                                <div class="text-16 text-truncate mb-2">
                                    {{ item.forumTitle }}
                                </div>
                                <div class="text-row text-14">
                                    <template v-if="!!item.registDateTime">
                                        <div class="date">
                                            {{ item.registDateTime, 'YYYY.MM.DD HH:mm' }}
                                        </div>
                                    </template>
                                    <v-divider vertical />
                                    <div class="id">{{ item.registUserId?.split('@')[0] }}</div>
                                </div>
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
                        <v-btn color="primary" rounded="lg" size="x-large" variant="flat" @click="$router.go(0)"
                            >목록
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

const store = {
        list: [
          {
            forumIdentity: 1,
            forumTitle: "Welcome to the Forum!", // 제목
            registDateTime: "2024-12-28T15:30:00Z", // 등록 시간 (ISO 형식)
            registUserId: "user1@example.com", // 등록 사용자 ID
          },
          {
            forumIdentity: 2,
            forumTitle: "How to use Vuetify components", // 제목
            registDateTime: "2024-12-27T10:00:00Z", // 등록 시간
            registUserId: "user2@example.com", // 등록 사용자 ID
          },
          {
            forumIdentity: 3,
            forumTitle: "New updates in Vue 3", // 제목
            registDateTime: "2024-12-26T08:45:00Z", // 등록 시간
            registUserId: "devmaster@example.com", // 등록 사용자 ID
          },
          {
            forumIdentity: 4,
            forumTitle: "Best practices for large projects", // 제목
            registDateTime: "2024-12-25T22:15:00Z", // 등록 시간
            registUserId: "projectlead@example.com", // 등록 사용자 ID
          },
          {
            forumIdentity: 5,
            forumTitle: "Ask me anything about JavaScript", // 제목
            registDateTime: null, // 등록 시간이 없는 경우도 처리 가능
            registUserId: "jspro@example.com", // 등록 사용자 ID
          },
        ],
      };


//popUpAlert 정보 객체
let popUpAlertInfo = reactive({
    toggle: false,
    text: '',
    url: ''
})



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
