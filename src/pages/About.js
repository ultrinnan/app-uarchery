import React from 'react';
import {Link} from "react-router-dom";

const About = () => (
    <section>
        <div className="container">
            <h2>Про додаток</h2>
            <p>
                Цей додаток являє собою "мультитул" сучасного лучника і розроблений спеціально для порталу <a href="https://uarchery.org"><b>UArchery.org</b></a>
            </p>
            <p>
                <b>
                    Головна мета проекту - розвиток і популяризація всіх видів стрільби з лука в Україні
                </b>
            </p>
            <p>
                Поточний функціонал:
            </p>
            <ul>
                <li>Універсальний конвертер</li>
                <li>Посилання на портал</li>
                <li>Сторінка "Про додаток"</li>
            </ul>
            <p>
                Запланований функціонал:
            </p>
            <ul>
                <li>Тренувальний лог</li>
                <li>Профіль лучника</li>
                <li>Можливість поділитися профілем</li>
                <li>Локальне змагання</li>
                <li>Глобальне змагання</li>
                <li>Дружні виклики (дуелі)</li>
                <li>Новини</li>
                <li>Календар</li>
                <li>Лучна енциклопедія</li>
            </ul>
            <hr/>
            Стосовно побажань по функціоналу додатку (чи іншим питанням) писати на <Link to="mailto:serhii.fedirko@gmail.com">serhii.fedirko@gmail.com</Link>
            <hr/>
            <p>© 2023 <Link to="https://fedirko.pro" target="_blank">FEDIRKO.PRO</Link>. All rights reserved.</p>
        </div>
    </section>
);

export default About;