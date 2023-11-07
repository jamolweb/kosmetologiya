import {
    Box
} from "@chakra-ui/react";
import News from "./news";
import Comments from "./comments";
import LastCard from "./last-card";

export default () => {
    return (
        <Box>
            <News heading="НОВИНКИ" heading2="Все новинки" title="Blue Seduction Antonio Banderas" brandName="Antonio Banderas" price="250.00 грн."/>
            <News heading="ЛУЧШИЕ ЦЕНЫ" heading2="Все хиты продаж" title="Yves Saint Laurent Black Opium" brandName="Yves Saint Laurent" price="1236.00 грн."/>
            <News heading="ЛУЧШИЕ ЦЕНЫ" heading2="Все лучшие цены" title="Blue Seduction Antonio Banderas" brandName="Antonio Banderas" price="250.00 грн. "/>
            <Comments heading="Твердый дезодорант" name="Old Spice Wolfthorn Deodorant Stick" content="Мой фаворит! Абсолютно комфортный. Не сушит, не жирнит, моментально впитывается, не раздражает. Вообще не выбеливает. Защищает на отлично. Всегда его использую и в городе и на море." date="06.03.2020 Жасмин" />
            <LastCard />
        </Box>
    )
}