import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text
} from "@chakra-ui/react"
import { LiaTelegramPlane } from 'react-icons/lia'

export default () => {
    return (
        <Box color={'white'} padding={'50px 50px 50px 0px'} w={'100%'} bg={'#333'}>
            <Grid w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4,1fr)', '2xl': 'repeat(5,1fr)', }} gap={'10px'} m={'40px auto'}>
                <GridItem>
                    <Heading>Logo</Heading>
                    <Text mb={'10px'} mt={'10px'}>
                        © 2008 - 2020 «CHIKA» <br />
                        Все права защищены.
                    </Text>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="123" height="39" viewBox="0 0 123 39" fill="none">
                        <g clip-path="url(#clip0_1_607)">
                            <path d="M47.7863 13.8525C46.9576 13.0868 45.7146 12.7388 44.1954 12.7388H39.0162V24.9903H41.7784V21.5098H44.1954C45.7146 21.5098 46.9576 21.0921 47.7863 20.3264C48.6149 19.5606 49.0293 18.4469 49.0293 16.985C49.0293 15.6624 48.6149 14.6183 47.7863 13.8525ZM45.7837 18.6557C45.3693 19.0038 44.7478 19.2126 43.9882 19.2126H41.7094V15.0359H43.9882C44.7478 15.0359 45.3693 15.1752 45.7837 15.5232C46.198 15.8713 46.4052 16.3585 46.4052 17.0547C46.4052 17.7508 46.198 18.3077 45.7837 18.6557Z" fill="#F3F2F2" />
                            <path d="M53.8631 12.7388H51.1009V24.9903H53.8631V12.7388Z" fill="#F3F2F2" />
                            <path d="M67.5361 12.7388H64.2905L61.7354 16.4978L59.1804 12.7388H56.0038L60.0781 18.7253L55.6586 24.9903H58.9042L61.7354 20.9529L64.5667 24.9903H67.8814L63.4618 18.5861L67.5361 12.7388Z" fill="#F3F2F2" />
                            <path d="M72.5081 19.9783H78.3778V17.6812H72.5081V15.0359H78.9993V12.7388H69.7458V24.9903H79.2064V22.6931H72.5081V19.9783Z" fill="#F3F2F2" />
                            <path d="M84.4546 12.7388H81.6924V24.9903H89.6338V22.6235H84.4546V12.7388Z" fill="#F3F2F2" />
                            <path d="M94.3296 12.7388H91.5674V24.9903H94.3296V12.7388Z" fill="#F3F2F2" />
                            <path d="M106.345 13.3654C105.378 12.8085 104.273 12.53 103.03 12.53C101.787 12.53 100.683 12.8085 99.7158 13.3654C98.749 13.9223 97.9204 14.688 97.3679 15.6625C96.8155 16.6371 96.5392 17.6812 96.5392 18.8646C96.5392 20.048 96.8155 21.1618 97.3679 22.0667C97.9204 23.0413 98.749 23.807 99.7158 24.3639C100.683 24.9208 101.787 25.1992 103.03 25.1992C104.273 25.1992 105.378 24.9208 106.345 24.3639C107.312 23.807 108.141 23.0413 108.693 22.0667C109.245 21.0922 109.522 20.048 109.522 18.8646C109.522 17.6812 109.245 16.6371 108.693 15.6625C108.141 14.688 107.381 13.9223 106.345 13.3654ZM106.276 20.8137C105.931 21.4402 105.516 21.8579 104.964 22.206C104.412 22.554 103.79 22.6932 103.1 22.6932C102.409 22.6932 101.787 22.4844 101.235 22.1363C100.683 21.7883 100.199 21.301 99.8539 20.7441C99.5086 20.1176 99.3705 19.4911 99.3705 18.795C99.3705 18.0989 99.5086 17.4028 99.8539 16.8459C100.199 16.2194 100.614 15.8017 101.235 15.4537C101.787 15.1056 102.409 14.9664 103.1 14.9664C103.79 14.9664 104.412 15.1056 104.964 15.4537C105.516 15.8017 106 16.289 106.276 16.8459C106.621 17.4724 106.759 18.0989 106.759 18.795C106.759 19.5607 106.621 20.2569 106.276 20.8137Z" fill="#F3F2F2" />
                            <path d="M120.087 12.7388V20.6744L114.217 12.7388H111.731V24.9903H114.356V17.1243L120.225 24.9903H122.711V12.7388H120.087Z" fill="#F3F2F2" />
                            <path d="M12.7062 3.96781L25.3433 11.3466V9.60631L12.7062 2.22754L0.0690553 9.53669L0 9.60631V11.3466L12.7062 3.96781Z" fill="#F3F2F2" />
                            <path d="M27.7602 22.9716L29.2794 22.0667L29.2104 7.37877L16.5733 0L14.985 0.904943L27.6912 8.28371L27.7602 22.9716Z" fill="#F3F2F2" />
                            <path d="M5.38631 15.2449L3.86709 16.0802L3.79803 30.8377L16.4351 38.2165L16.5042 38.2861L18.0234 37.3812L5.38631 29.9328V15.2449Z" fill="#F3F2F2" />
                            <path d="M14.2254 7.58777L12.7062 6.75244L0.0690553 14.0616L0 14.1312V28.8191L1.58827 29.7241V14.9665L14.2254 7.58777Z" fill="#F3F2F2" />
                            <path d="M31.5582 8.42285L31.6273 23.1804L18.9902 30.5592L20.4403 31.4641L33.0774 24.1549L33.1465 24.0853V9.39741V9.32779L31.5582 8.42285Z" fill="#F3F2F2" />
                            <path d="M7.80322 26.8699V28.6798L20.5094 36.0586L20.5784 35.9889L33.0775 28.6102L33.1465 28.5406V26.8003L20.5094 34.1791L7.80322 26.8699Z" fill="#F3F2F2" />
                            <path d="M16.5042 23.1804L13.4658 25.1295V27.2179L16.5042 25.1991L19.6117 27.2179V25.1295L16.5042 23.1804Z" fill="#F3F2F2" />
                            <path d="M13.4658 18.5164V20.5351L16.5042 22.5538L19.6117 20.5351V18.5164L16.5042 20.4655L13.4658 18.5164Z" fill="#F3F2F2" />
                            <path d="M21.2 11.6946L17.8853 13.226V16.9154L19.6117 18.0292V14.3398L22.9263 12.8084L21.2 11.6946Z" fill="#F3F2F2" />
                            <path d="M15.1921 13.226L11.8774 11.6946L10.1511 12.8084L13.4657 14.3398V18.0292L15.1921 16.9154V13.226Z" fill="#F3F2F2" />
                            <path d="M7.80322 21.5099L11.0488 23.0414L12.8443 21.9276L9.5296 20.3962V16.7068L7.80322 17.8206V21.5099Z" fill="#F3F2F2" />
                            <path d="M25.3433 17.8206L23.5478 16.7068V20.3962L20.3022 21.9276L22.0286 23.0414L25.3433 21.5099V17.8206Z" fill="#F3F2F2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_607">
                                <rect width="122.918" height="38.2861" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </GridItem>
                <GridItem>
                    О компании <br />
                    Доставка и оплата <br />
                    Возврат и обмен <br />
                    Бонусная программа <br />
                    Пользовательское <br />
                    соглашение <br />
                </GridItem>
                <GridItem>
                    Качество <br />
                    Блог <br />
                    Отзывы(359) <br />
                    Карта сайта <br />
                    Контакты <br />
                </GridItem>
                <GridItem>
                    <Heading color={"white"}>
                        Подписаться на рассылку
                    </Heading>
                    <Text color={'#7E7E7E'} mt={'20px'} mb={'20px'}>
                        Узнайте первыми о распродажах <br /> и новинках!
                    </Text>
                    <Flex w={'80%'} justifyContent={'space-between'} borderBottom={'1px solid white'}>
                        <Text>Введите Ваш E-mail </Text>
                        <LiaTelegramPlane />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Heading>
                        (096) 454-45-50
                    </Heading>
                    <Text mt={'10px'}>многоканальный телефон:</Text>
                    <Text mt={'10px'}>город Одесса, <br />
                        ул. Ришельевская 23, оф. 273</Text>
                    <Flex mt={'10px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="171" height="36" viewBox="0 0 171 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#666666" />
                            <circle cx="63" cy="18" r="18" fill="#666666" />
                            <path d="M26.7152 9.75381C24.9102 7.98419 21.9919 7.12675 18.0401 7.20401C14.0554 7.28238 11.3918 7.98178 9.65774 9.40512C7.98108 10.7812 7.2002 12.7948 7.2002 15.7419V18.7498C7.2002 22.2291 9.06458 26.0541 12.6279 26.6329C13.0392 26.7002 13.4268 26.4205 13.4936 26.009C13.5604 25.5978 13.2811 25.2101 12.8697 25.1433C10.1674 24.7044 8.70925 21.5216 8.70925 18.7498V15.7419C8.70925 11.516 10.2751 8.86598 18.0697 8.71266C21.6034 8.64264 24.1539 9.35602 25.6585 10.8313C26.8311 11.9811 27.4011 13.5873 27.4011 15.7419V18.7498C27.4011 23.3045 25.3567 25.3135 20.1133 25.905H16.3952C16.1951 25.905 16.0031 25.9845 15.8617 26.126L13.2418 28.7459C12.9472 29.0405 12.9472 29.5183 13.2418 29.813C13.3891 29.9602 13.5823 30.034 13.7753 30.034C13.9684 30.034 14.1616 29.9603 14.3088 29.813L16.7077 27.4141H20.1554C20.1832 27.4141 20.2111 27.4126 20.2387 27.4094C23.2395 27.0761 25.2945 26.2952 26.7054 24.9515C28.189 23.5386 28.9103 21.51 28.9103 18.7497V15.7419C28.9103 13.1968 28.1717 11.1821 26.7152 9.75381Z" fill="white" />
                            <path d="M18.5261 12.1274C18.5262 12.1274 18.5262 12.1274 18.5264 12.1274C19.7422 12.1274 20.8853 12.6009 21.7451 13.4607C22.6049 14.3205 23.0785 15.4638 23.0784 16.6798C23.0784 17.0965 23.4161 17.4343 23.8328 17.4343C23.8329 17.4343 23.8329 17.4343 23.8329 17.4343C24.2496 17.4343 24.5874 17.0966 24.5874 16.6799C24.5875 15.0608 23.957 13.5385 22.8122 12.3937C21.6674 11.2488 20.1455 10.6184 18.5264 10.6184C18.5263 10.6184 18.526 10.6184 18.5259 10.6184C18.1092 10.6184 17.7715 10.9562 17.7715 11.3729C17.7716 11.7895 18.1094 12.1274 18.5261 12.1274Z" fill="white" />
                            <path d="M18.5259 14.7808C19.573 14.781 20.425 15.6329 20.4251 16.6799C20.4252 17.0966 20.763 17.4344 21.1798 17.4343C21.5966 17.4343 21.9343 17.0964 21.9342 16.6797C21.9339 14.8008 20.4051 13.272 18.5261 13.2717H18.526C18.1093 13.2717 17.7716 13.6095 17.7715 14.0262C17.7715 14.4429 18.1092 14.7808 18.5259 14.7808Z" fill="white" />
                            <path d="M15.1427 16.0732C14.7987 16.3084 14.7105 16.7779 14.9456 17.1219C15.1807 17.4659 15.6503 17.554 15.9943 17.3189C16.2648 17.134 16.8984 16.7008 16.854 15.8348C16.8258 15.3165 16.3583 14.5764 15.9711 14.0469C15.4047 13.272 14.9165 12.8053 14.5233 12.6606C14.1561 12.5239 13.7721 12.521 13.3811 12.6522C12.5714 12.925 11.9834 13.4181 11.681 14.078C11.3866 14.7205 11.3931 15.4588 11.7 16.2137C12.425 17.9921 13.4399 19.5492 14.7233 20.8482C16.0155 22.1247 17.5725 23.1396 19.3517 23.865C19.7367 24.0216 20.1175 24.1 20.4836 24.1C20.8347 24.1 21.1723 24.0279 21.4868 23.8838C22.1467 23.5813 22.6397 22.9934 22.9128 22.1827C23.0436 21.7926 23.0407 21.4088 22.9051 21.0441C22.7594 20.6481 22.2926 20.16 21.5178 19.5936C20.9882 19.2064 20.2481 18.7389 19.7278 18.7106C18.8636 18.6672 18.4308 19.2997 18.2459 19.5702C18.0107 19.9142 18.0987 20.3837 18.4427 20.619C18.7868 20.8543 19.2562 20.7662 19.4915 20.4222C19.5736 20.3022 19.6205 20.2477 19.6473 20.2238C20.0709 20.3595 21.2786 21.2469 21.496 21.5869C21.5013 21.6086 21.5026 21.6417 21.4824 21.702C21.3873 21.9846 21.2016 22.3545 20.8581 22.512C20.5363 22.6593 20.1706 22.569 19.9209 22.4675C18.3266 21.8175 16.9347 20.9115 15.7903 19.7811C14.6534 18.6303 13.7474 17.2384 13.0978 15.6447C12.996 15.3944 12.9056 15.0286 13.053 14.707C13.2104 14.3635 13.5804 14.1777 13.8621 14.0828C13.9223 14.0627 13.9554 14.0638 13.9783 14.0693C14.3185 14.2871 15.2053 15.4941 15.3411 15.9178C15.3171 15.9442 15.2627 15.9912 15.1427 16.0732Z" fill="white" />
                            <path d="M73.2584 9.53776C72.9749 9.19094 72.5501 9 72.0623 9C71.7971 9 71.5162 9.0558 71.2275 9.16615L51.5751 16.668C50.5322 17.0661 50.3917 17.6633 50.4008 17.9839C50.4098 18.3045 50.5839 18.893 51.6478 19.2314C51.6541 19.2334 51.6605 19.2353 51.6669 19.2371L55.7433 20.4037L57.9479 26.7077C58.2484 27.5671 58.9231 28.101 59.7089 28.101C60.2043 28.101 60.6916 27.8934 61.1181 27.5008L63.6395 25.1792L67.2967 28.124C67.297 28.1243 67.2976 28.1245 67.2979 28.1249L67.3326 28.1528C67.3358 28.1553 67.3392 28.158 67.3424 28.1605C67.7489 28.4758 68.1926 28.6423 68.626 28.6424H68.6262C69.473 28.6424 70.1474 28.0156 70.3438 27.0456L73.5638 11.1459C73.6931 10.5077 73.5847 9.93665 73.2584 9.53776ZM57.107 20.1821L64.9717 16.1643L60.0746 21.3678C59.9944 21.453 59.9375 21.5573 59.9095 21.6708L58.9653 25.4958L57.107 20.1821ZM60.1965 26.5001C60.1639 26.53 60.1311 26.5567 60.0984 26.5814L60.9744 23.0331L62.5681 24.3164L60.1965 26.5001ZM72.2306 10.8758L69.0106 26.7757C68.9796 26.9278 68.8805 27.2819 68.626 27.2819C68.5002 27.2819 68.3423 27.2134 68.1805 27.0888L64.0364 23.7521C64.0359 23.7516 64.0352 23.751 64.0345 23.7507L61.5687 21.7651L68.6505 14.2402C68.8772 13.9993 68.8977 13.6303 68.6992 13.3657C68.5004 13.101 68.1403 13.0178 67.8458 13.1684L56.1982 19.1188L52.0663 17.9366L71.7126 10.437C71.8786 10.3736 71.9945 10.3603 72.0623 10.3603C72.1039 10.3603 72.178 10.3653 72.2054 10.3991C72.2415 10.4432 72.2876 10.5936 72.2306 10.8758Z" fill="white" />
                            <circle cx="153" cy="18" r="18" fill="#666666" />
                            <path d="M163.737 14.1844C163.687 13.0827 163.512 12.3303 163.256 11.672C162.996 10.9814 162.589 10.3559 162.062 9.83879C161.545 9.31225 160.92 8.90463 160.229 8.64468C159.571 8.38899 158.819 8.21417 157.717 8.1641C156.613 8.11357 156.26 8.10156 153.45 8.10156C150.639 8.10156 150.286 8.11357 149.182 8.16379C148.081 8.21417 147.328 8.38915 146.67 8.645C145.979 8.90479 145.354 9.31225 144.837 9.83879C144.31 10.3557 143.903 10.9813 143.643 11.6719C143.387 12.3303 143.212 13.0827 143.162 14.1842C143.112 15.2882 143.1 15.6407 143.1 18.4515C143.1 21.2625 143.112 21.6151 143.162 22.7189C143.212 23.8205 143.387 24.5728 143.643 25.2312C143.903 25.9217 144.31 26.5474 144.837 27.0643C145.354 27.5909 145.98 27.9983 146.67 28.2581C147.328 28.5141 148.081 28.689 149.183 28.7393C150.286 28.7897 150.639 28.8016 153.45 28.8016C156.261 28.8016 156.613 28.7897 157.717 28.7393C158.819 28.689 159.571 28.5141 160.229 28.2581C161.62 27.7205 162.719 26.6215 163.256 25.2312C163.512 24.5728 163.687 23.8205 163.737 22.7189C163.788 21.615 163.8 21.2625 163.8 18.4516C163.8 15.6407 163.788 15.2882 163.737 14.1844ZM161.874 22.6341C161.828 23.6433 161.66 24.1913 161.518 24.5559C161.17 25.4587 160.456 26.172 159.554 26.5203C159.189 26.6619 158.641 26.8306 157.632 26.8766C156.541 26.9265 156.213 26.9369 153.45 26.9369C150.686 26.9369 150.358 26.9265 149.267 26.8766C148.258 26.8306 147.71 26.6619 147.345 26.5203C146.896 26.3543 146.489 26.0898 146.155 25.7459C145.812 25.4121 145.547 25.0056 145.381 24.5559C145.239 24.1913 145.071 23.6433 145.025 22.6341C144.975 21.5428 144.964 21.2154 144.964 18.4518C144.964 15.688 144.975 15.3608 145.025 14.2693C145.071 13.2602 145.239 12.7122 145.381 12.3475C145.547 11.8979 145.812 11.4912 146.155 11.1573C146.489 10.8135 146.896 10.549 147.346 10.3832C147.71 10.2414 148.258 10.0728 149.267 10.0267C150.359 9.97698 150.686 9.9664 153.45 9.9664H153.449C156.213 9.9664 156.54 9.97698 157.632 10.0269C158.641 10.0728 159.189 10.2415 159.554 10.3832C160.003 10.5492 160.41 10.8137 160.744 11.1573C161.088 11.4912 161.352 11.8979 161.518 12.3475C161.66 12.7122 161.828 13.2602 161.874 14.2693C161.924 15.3606 161.935 15.688 161.935 18.4516C161.935 21.2154 161.924 21.5426 161.874 22.6341Z" fill="white" />
                            <path d="M153.449 13.03C150.455 13.03 148.028 15.4574 148.028 18.4515C148.028 21.4457 150.455 23.8729 153.449 23.8729C156.444 23.8729 158.871 21.4457 158.871 18.4515C158.871 15.4574 156.444 13.03 153.449 13.03ZM153.449 21.9707C151.506 21.9705 149.93 20.395 149.93 18.4514C149.93 16.5079 151.506 14.9322 153.449 14.9322C155.393 14.9324 156.969 16.5079 156.969 18.4514C156.969 20.395 155.393 21.9707 153.449 21.9707Z" fill="white" />
                            <path d="M160.349 12.7837C160.349 13.4642 159.798 14.0158 159.117 14.0158C158.437 14.0158 157.885 13.4642 157.885 12.7837C157.885 12.1032 158.437 11.5515 159.117 11.5515C159.798 11.5515 160.349 12.1032 160.349 12.7837Z" fill="white" />
                            <circle cx="108" cy="18" r="17" fill="#666666" stroke="#676767" stroke-width="2" />
                            <path d="M115.159 10.8407C113.327 9.00876 110.892 8 108.301 8C108.301 8 108.3 8 108.3 8C107.019 8.00015 105.77 8.24826 104.589 8.73761C103.408 9.22696 102.349 9.93451 101.443 10.8407C99.6112 12.6725 98.6024 15.1082 98.6024 17.6988C98.6024 19.2437 98.9752 20.7791 99.6815 22.147L98.0513 26.8043C97.9364 27.1328 98.0177 27.4899 98.264 27.736C98.4363 27.9084 98.663 28 98.8962 28C98.9961 28 99.0971 27.9832 99.1957 27.9487L103.853 26.3186C105.221 27.025 106.756 27.3977 108.301 27.3977C110.892 27.3977 113.327 26.3888 115.159 24.557C116.991 22.7252 118 20.2896 118 17.6989C118 15.1082 116.991 12.6725 115.159 10.8407ZM114.33 23.7275C112.72 25.338 110.578 26.2246 108.301 26.2246C106.908 26.2246 105.524 25.8801 104.299 25.2279C104.077 25.1098 103.814 25.0895 103.578 25.1721L99.347 26.653L100.828 22.4217C100.911 22.1856 100.89 21.923 100.772 21.701C100.12 20.476 99.7754 19.0921 99.7754 17.6988C99.7754 15.4216 100.662 13.2805 102.272 11.6702C103.883 10.0601 106.023 9.17325 108.3 9.17294H108.301C110.579 9.17294 112.72 10.0598 114.33 11.6702C115.94 13.2805 116.827 15.4214 116.827 17.6988C116.827 19.9762 115.94 22.1173 114.33 23.7275Z" fill="white" />
                            <path d="M111.906 18.5645C111.459 18.1184 110.733 18.1184 110.287 18.5645L109.799 19.0525C108.588 18.3923 107.607 17.4117 106.947 16.2L107.435 15.7121C107.881 15.2659 107.881 14.5399 107.435 14.0937L106.12 12.7787C105.673 12.3326 104.947 12.3326 104.501 12.7787L103.449 13.8307C102.847 14.4332 102.817 15.4691 103.365 16.7477C103.84 17.8578 104.711 19.0779 105.816 20.183C106.921 21.2882 108.142 22.1589 109.252 22.6347C109.859 22.895 110.412 23.0248 110.889 23.0248C111.417 23.0248 111.852 22.8663 112.169 22.55L113.221 21.4979V21.498C113.437 21.2818 113.556 20.9945 113.556 20.6889C113.556 20.3831 113.437 20.0958 113.221 19.8797L111.906 18.5645ZM111.339 21.7205C111.167 21.8925 110.638 21.9528 109.714 21.5566C108.738 21.1382 107.648 20.3558 106.646 19.3536C105.644 18.3514 104.861 17.2619 104.443 16.2856C104.047 15.3611 104.107 14.8321 104.279 14.6601L105.311 13.6283L106.585 14.9029L105.974 15.5139C105.698 15.79 105.631 16.2089 105.809 16.5562C106.612 18.1309 107.868 19.3878 109.443 20.1908C109.791 20.368 110.209 20.3015 110.486 20.0251L111.096 19.4143L112.371 20.6889L111.339 21.7205Z" fill="white" />
                        </svg>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}