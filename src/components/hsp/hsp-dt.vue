<!-- 병원 소개 페이지 -->
<template>
    <div class="static-content">
        <!-- 01 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">01</div>
                <v-divider vertical />
                <div class="title">병원 소개 페이지</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">
                    병원의 정보 병원의 정보 병원의 정보 병원의 정보
                    <br />병원의 정보 병원의 정보 병원의 정보 병원의 정보2
                    병원의 정보 병원의 정보 병원의 정보 병원의 정보2
                </div>
            </div>

        </div>
        <!-- 02 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">02</div>
                <v-divider vertical />
                <div class="title">자세한 소개</div>
            </div>
            <div class="cnt-text">
                <div class="finace-list-area">
                    <div class="title subtitle-22">병원 장점</div>
                    <div class="text-16 mgb40">
                        우리는 만병통치약이 있습니다. 대단하죠
                    </div>
                    <div class="finace-box">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">의사 소개</div>
                                    <div class="text-16">
                                        서울대에서 약초학을 전공하고 MIT에서 대학원을 나온 의사가 대기중입니다.
                                    </div>
                                    <div class="img">
                                        <img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUQEhIVFhUVFRUWFRUQFxUQFxUVFRUWFhUWFRUYHSggGBolGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0lHR0tLS0tLS0tLS0rLy0tLS0tLSstLS0rLS0tLSstLS0rLSstLS0tLS0tLS0tLS0rLS0tLf/AABEIALEBHQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEMQAAEDAQUFBgIFCgUFAAAAAAEAAgMRBAUSITFBUWFxgQYTIjKRsQehFEJSweEjYmNygpKistHwFTODwvE0Q1Nzs//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgEEAQQDAAAAAAAAAAABAhExAxIhQVEEExQiMkJh/9oADAMBAAIRAxEAPwD15IlQstEQhCAQhCAQErRVSNbRbmPyzahz3JDVWHihqkkbULeom0QbVRtYMeegVlh0UYb+Ursw5+q0iUNWP21tBjsFqeDQiCQA7i5uEH5ql2y7awWBoDgZJnCrIWGhpoHPP1W16nOgyNOBnvW87waWyuhigeCBAC9jpPs+QOec6akA00WeeF4dV8GbPhsJd9uVzv4WD7l3hGq8fsFjv2wxhsDGmIZhlGzD0oHj1XRdk/iMJpfolsi+j2itBqGPO7xZsO6tQd+xWo7xhUijcuS7UX6x0psINQGgz0OGuLyx1GdCMzwoNCVnSw+9b5sszy0AODCQ+0EhkbKZ0DjlJyHRWuyctjlDpLPMyZzTQ4cizccJzz36blztquiyzANMTmilB3bqNGdcmEluu4KpfH0ixYX2aUzGMV7u0AOe1upDXgB2g8p2b9E+1jbv26d+Xbr09OcmErI7LdoY7bZ22iPL6r2HMxvGrT7g7QQtdrappzK0ZVSvOScdFAHb1UeefE1jfoFqFf8AuwmnEuAP3rpPh+Sbus1f/E35Ci434rSYbMIh5p7QKcWsB+9zV6D2WsvdWSGPcwfPNay5JwugZ8EktQRTapHBKcxmpfIYEApaZa5IEQpXQrPYvcRCaahDZK8Oazca1s5CELKhCEIFQhCgEIQgEhKVI0VK1jN1LT42qam1NYE+lF0rBC1NblkVJVNe1QRsHiPALLv+0sijlmkLsEcTnnCS0nACaCm/TqtWHVxXAfGK0u+iNhjBLppQKA0OCPxu6YgwdVreiOU7CXQ61SPt9oo5znnCXDE0U1OE6/ZA3BetMe9rQRGMtrW06htclh/D66TDZYmPAxNb4toD3ZnnSq65oWrfApQyykYgGkbiCw/MLi/izcjJrI61tbhnsxa4nRxjLgHgkagVxA/mr0QBUL6sAmhkhIqJI3xkb2vaWkfOvRY2rJ7KX/393x2k5vDcDhtdI3w05uNP3lh2rsO445u/c20yVc5zc24znhLTq3YpPhhdZgjtEJkxYZR4CMJZIzwucRU5OLQ4dV2bs8lZR45Nabxsk0ccsrHPkkayNmFji5zjQVGAUbxqKb1qW685HyYpo+6kAFKOBa8fmmvhO3Cc9u+nU2254Ta3W+Yhzmt8BlPhiY0atboNpLjU55UXnd43k622sRxgiBhqSci6vhD3bvNQN4njTfJG/wDDqySxSyWiMHuZnuqzTwk5OaOGwbqhepjcsy5bI1kbQBQAABaYWKUKvMzU8K/1Vhyxu1V8CyWWW05VY3wh31nOyaPUhIjzm/3fT75jszM47NRp/X8zz0P8hXrlA0AaADlkF5X8K7qkOK0FxbJLV730BdRxrlXIE5mvFemviDGOpU+E1LiXE5bSVbCo5Lwhr/ms/eCsxkEZaKnd92xsAIaMVBmcz03K8l16RBKavawfrHkNPUqZyjhbm952mn7Lcveqkjzz9OSim4VDMw0yVkhQz1pkgigoKtBrSnqpVSggLXYq65HkrwXPKeW4EIQsqEIQoBCEEqoCnxNySUyT2LpJqM2n4UodsKUFI4KoHBIClYdiQDNAxpo0nmVyt9zGW2wWPLCxolfTXE4lo5UGfXgurc3wEcD7LnLosofbp5xsOHPPNjGMy4VxfupysdHHGGgNaAANgUgTXA6jqN/4pzSogQlCFRxzonQ3tUA4bRGCSNK0wn0MbT/qLoLdJga525rqelQq3aEYX2af7E2Bx/MmaWn+IMVTt3b3QWSSZvmAwtrn4nEBppt1J6JjF24+8rwkttp+gw+Vg/Ku2YhSuI7m5ftZbAmG5A2lks48TnCrjq5xyMj6aACtBsA5la3YW6vo8VHD8tJ45Cc89cJO5tc95J4Lf7NWCjnzu1cSGk6n7R+7oV0yy14nEJ8tuGPC0N1oAK7+KlampwXNA5eUfE22utVrhuuM1DSHy02ud5WnkD/GNy9Lvq8WWeCS0P8ALGwuPGmjRxJoOq83+Fd1vnllvKfNz3lwJ+0STlwFfZIPQ7kutsDAxu4V2ZgAZcFbtQ8DuR9lMFE9wcwkZgg5q7DwKZIJoCU4psmnUKCNsZwhp3DFxOtPVTICEEblEVMVDJIG5lUJJRoxOOSbZ/KDvz9c1i2+2OkNBotS6z+THCo+azm1FpCELm0EIQoBN2pydG1dMPlnI5pTgntanLW2UQUgNUIogjfkQncUk2ldxSNOzqgcTRtToBmsLsc2sZk2v8R5vLn/AO4LRvmXDZ5juik/lKj7PQ4YQOXya0J6o0klKJUqgAhIUtUGT2rZWyyna0NkH+m9r/8AapLys7ZoM2g0DZG1z8TCHtI4ghSX82tltA/Qy/8AzcnXQawRH9G32QcnDbCwBrQDNMcETHaV+06n1Wg1PP07GGLA1rKk4QBU6mm00XI9lrtkdbrVaJRQQuMEI2Aa1H7Lga75CuyK3lriBrUrk0JZpGtaXONGtBJJ2ACpPosjzX4vXk6R0F2R5ukIklA3VIjb1OJ37LV3lx3a2zQRwigDGip3nafVeb9g4nW28ZrxeCQHEsB2aBjeGFuGvEcV6oIs6uNSNNw5DfxVDXsL8jUN27C7+g+alwgUaBlpQbk4Jjj4goEjOX97MkPbUjcMz9yVpzp1T0CIQkcgjlfQVWVacTzuC0JHVVYtJyWoKUUGdAFoWOPCCONfUJskrYxxUlkdVod9rNYz4aiZCELm0EJUigUNrkrDW0UUJzU2FdMeGKMSMSQxppjWkPRRMDTvTgoFUMuWamxJDmrBmdo/+ln/APW72Vm6v8sdPYKK/o62aYfopP5Si4n1iad7WH1aFfQ0AlTU5ZoEiVCChf7qWWc/oZfmwgJ9ztpBGNzG+yp9qnn6M5o1kdHGP23tB+VVqQNo1o4D2QOISIcopp2tFSdSABvJ0A4qiSi4v4nX13djdEzWYOZiOmACr6DbWrWV0rIF2TIy4eL02KtetwwWhuCaNr6aEihbmD4XDMZgcMgp3LphfDa6O4sbCfNJ43ddPvPVdSmxNAGECmEAUG4DJOKvIUKEnx9FMq1fH0SIkj1J6KVRxCg6p6UKmOKcSq8kwGQzKQJgVa2zYchtV0CozWbb26KjJtMhcaBb9ibSNo/NCqPha0aZnL1WiBTJYzblCEIWFKkQhAhNM1YY5V3DJSQOqFvHhmpkqRKtMhM1TtiWNqADUOKUlMOaga/Q1zBFKHaCq9gswjAY3ygUG2g2DorZSBUKkc4pSEKBBIl7wf8AKQhRyg08OZ2V0HEqjFvd5ne1jQcEbqlxBAdIRhaG11wgk148FvRMoKbAKBRxRUArmdanfw3KR7KgipFdoyPRL8CpabbQ93GMb92xvFx2clTNjIkikkdjeXkV0a0d3IaNGwVHPRadlsrYxhaOZOZJ4lU78tcUcRdK4tGJrWloLjjJGDCACSa59DXJW2SEm61W6JzVjWe9xo8UI2irmniKZj06lRW+/aCkbC48iG9a5nlRcnTtvwuy2od+GD7NT6mitbVztzPDSZZnjG6hIzNPRaMt8xDTE7kKe61csZ7J08rxGk5U2nxnkqL7+3Rn1/BVDeclSQ0fM/es/fwntufT9S+nQMKeN6wGX1JphbXjUfenS3lKR9Qcq/1WfyMF/GzXbTbC53dszO38Vas1mw5nMrBsV4PiywNcDqRUOPXNa8F7xOyJwHc/L56Lc62GXiVnPoZ4+l6ioW5nurwKz72lwtr6LpHFV7zFM1uxuZ6ZrTWLdLfHXmVtLnly6aCEIWQIQhAIs52biUKOE+IhawZq6kcUVSLbJ7dEEplUheoHoxKLEnKh6GJoCdVAjnJaoASGPaE8BssoaC4nIKOzFzhiOVc6bhsHomWqIvowigrVxy0Gg9fZXGhPQAEIKFAhWJ2is7XuhYc8JfIP1mhrQf43LRtlpwua3g5xJNAAKAfM/JYVutT3kT0o1tWAcHEeI9QB1XPqy9ldej/OH/RikMB3JzJU9kwXi1Hu7qrPj3hQ91uC0HOCZkppruU8PBNcFYljVKVzm7CeWazfDc8pGu+00jlmEODNK/cqsF8xE0rnuORUk0kbto6qrJ5Rvip5HelFWltr2mkgy2GlR13Kc2Q+ZhoeGY6hK6UO8LhR2zaDTmpP9b2s3RfHdN8wLRmQT/LuV287T3j6Dyj3VGKeN5EYgjEoFcQa0AgfWApkVZ7nCvodGfrzuPm/UWXL+Oqt3X5+hWssy7G+LofmQtNWuIQhCgUpEIQChdk/mFMopdQVceUvCyHJaqJqcV1YKXJAEBqcAoFATgm5pC5BLVMkFRkaKMkpuE70CxWoaOoCN+h5J7rS3TEOTfET0CrWqAuFCAfkU2x2dseYZnvrUq6gvxurU0pXenKETjaCOYT2vB0KgdVLiQAkleGguOwE+igwrwGOUk6Cg/d/GqWWhaWnQih5LCkbPJl32EuOXdtDak55l1TTXSigvLs8I2BmOSW0S5NMjnPDN7g0mi7/AG5xV2bDewa8xOc3E00114harbU2m5J2Y7EQ2dpfM0TSv8xkAc1o+y1py5lbclywEU7vCNndl0fyaaLx59Cb/WvVj15/aMY2xu9MdbArc/ZeMmrZpW8PA4fNtfmpLJcEDDicXyEbHkYf3WgA9arH49b+/wBNmG30UsFra4K+OzcDnmRzXEUphxFkY44G0BPOqzrVc0EZd9Gho95qcLnUy3gmgGafjX1SfU4fCtbbFG91S0H1aTzIOahj7LOlo6GcMA8zXtMjhw8wy4pY22mOvexEAfWb4h12qT/EcP5Rpo4aEaHnvC5avTv7Tw9G7nP0vlHPYbTZ3UwOkadHxDGP2m+ZvzHFVrZaS5opk6uu41Xa3dau+jDxl9objtCyr9uYOPeR+F/1hsfz3HiuuXQlm8XHp/U2ZdvUc7Y5Cx2J5Ae3MO2EDdw4LoTLiAOlQDTdULLhspxVfQkCgFK0481pwrfSxuM8uf1PUxzs00Lr1d0HutBUrqbkTvP9+6urVecIQhQCEqRAKC2khtRsIU6Rzaih2pPCIrLMDmrrSFjGzvacq8wni1PbqPXJdd7TTZACMKz4rdXYemasstQO1NIsYUmFI14TqqITCjClqiqbCYUYeCVCBKcE0srsCdVFUDRHuKz7/lLIHEnWg51OY9KrTqub7RSY5o49jfERxOlfkt4TeQOz1hJPev10aNw/qVuOs7e8ElM8OEHdnVMsLQ1oT5JhsVyttExQFA2VOEixoSGMJCQE3Eo3MxHgmhFK5z/C3Ib1NZrK1mmu0nUp5e1oVaS2VyaqLL1zt7dnsVXRUB2td5T/AEK2mMdqSmyuUslmq3hnlhd4sO4oZo30e2jcNDnWtND/AHvW1KU5jU2RMcZjNQzzud3WZamCtVExPndUqOqUjYsDaMHHNWEjG0AG4USrkoQhCBUIQgRCEIBBQhAKlfE2GMnaSAPf7ldWD2mm8rOBJ65D2KsnkZv+Jyj63qAfuRJfdpaKtLTwIP3FUnFSNNV2PBsPbe0hxa6OM02DE2o51K1rJ21Dh4oiN+Eh1Ohouat9lGIOG4+xVBrSAXbt2q5ZzPmO+M6d5j0SHtXZzqXD9Zp+5aNnvSJ/lkaeFRX0XmEExIrhJryUhtoiIkc1wwkHSuixM8/cMujh6r1IzhAtAK5ptqDmB8b6ggEUNcio/wDEHDcef4L0THby2Oq70LnJn1mLt5OfXL2ToL33g+6rMmqVqSxG+2XKiaxmLb1WfBaKajL2WrA4Ya5U37Ou5S+ANaRtHPVSPkCSoOVQd9M+ipXgSCOKk8id06idaDvTI4nHQV4nIKxFYdrs+CCswOecvVX4LOG81M1gCillUCTSUUMTCTVJSuqjnt1MmCvsirU0jWirjRZst44smig3lVJquNXFI0AKhSlhFXDmPdOopbG0l7abDU8As3hproQhclCEIQKhCRAIQhAIQhALkr5djmcdgNB0y96rq5HUBO4E+i5h0NaneumE8oyZQljKuTwKBkWa6qq2gZ9CqpZ4StaWCvooPouRCmllVLI3whWp7OHsITbLBQUVyCKimluTHsEHdmg0XSRWbG3EP+DuVOWyblo9npML+7do7Tg7Z66ei6cTw55Xas6xuBqprLZzVdM6yg7FH3DQf6Kd7KGy2UUzCtNs+GuAgcDmOdAntUgWLRSkfMPqtdyqPdVGNkkkBcwtA3rZBTHygJsOjbQJHyAKpNbNyzbVeAGpz3DM/gppWjPalm2u9Gs1zO4Zn8FlzW5zjQZDhr6qo+PUrchppG3ufm0im7aOajMx2g9CsqJueXyVi2TPDSWuII6q6F0UO9WYYxrrzWZdFqc8eI19Ffkzas5fCtSCxl2ZNB81fijDRQCiIR4RyHsnLha0EIQoBCEIFSIQgEIQgEIQgitfkdyWMhC69NKqzqBqRC6IlTQhCCGPVWGIQqtTlRQedv6zfcIQtThl2J0VKPU80IXGIlCchCBrtFTmSoQU3aHkVgHahC3FI3VSyeUoQqqpBqprZ5XdUIS8iG4NOi2thQhZz5V0Meg5D2TkIXnUIQhAIQhB/9k=" />
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">의사 이름</div>
                                    <div class="text-16">
                                        김리아
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">의사 경력</div>
                                    <div class="text-16">이재용 주치의 10년 하다옴</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card class="finace-list" variant="text">
                                    <div class="title subtitle-18">평가</div>
                                    <div class="text-16">고객의 평가</div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </div>
        <!-- 03 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">03</div>
                <v-divider vertical />
                <div class="title">그거아세요</div>
            </div>
            <div class="example-list">
                <v-list>
                    <v-list-item>
                        <div class="item-avatar">
                            <div class="img">
                                <img alt="" src="https://i.pinimg.com/originals/5b/54/39/5b543923641d0ef1df257706e19ee255.gif" />
                            </div>
                            <div class="subtitle-16">Hello</div>
                        </div>
                        <div class="item-content">
                            <div class="title subtitle-22">저 모눈종이 샀어요</div>
                            <ul class="list-dot text-16">
                                <li>
                                    어제 짜장면 먹었어요
                                </li>
                                <li>
                                    귤에 하얀거 이름은 귤락이래요
                                </li>
                            </ul>
                        </div>
                        </v-list-item>
                </v-list>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router' //라우터 정보 객체

//라우터 정보 객체
const router = useRouter()
</script>
<style scoped>
@import '../../styles/hdt.css';
</style>