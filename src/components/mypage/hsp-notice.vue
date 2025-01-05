<!-- 공지사항등록 -->
<template>
    <div class="sub-group my-page">
        <v-divider class="svc-divide" />
        <!-- 공지사항 -->
        <div class="my-info">
            <div class="title">
                <v-icon class="icon-hsp" size="md" />
                공지사항등록
            </div>
            <div class="member">
                <div class="form-box">
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>제목</v-label>
                        </div>
                        <div class="input-wrap side-btn">
                            <div class="input-wrap">
                                
                                <v-text-field 
                                aria-label="병원이름" 
                                color="primary"
                                placeholder="제목을 입력해주세요."
                                density="comfortable"
                                hide-details="auto" 
                                name="name" 
                                variant="outlined"
                                ></v-text-field>
                                
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>내용</v-label>
                        </div>
                        <div class="input-wrap side-btn">
                            <div class="input-wrap">
                                    <v-textarea 
                                    rounded="lg" 
                                    variant="outlined"
                                    placeholder="내용을 입력해주세요."
                                    row-height="15"
                                    rows="20"
                                    clearable
                                    auto-grow></v-textarea>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="bottom-btn" style="display: flex; justify-content: flex-end;">
            <v-btn>
                저장
            </v-btn>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.notice {
    display: flex;
}
</style>