import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ConverterInputs from "./ConverterInputs";
import './Converter.scss';

export default function Converter() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section>
            <div className="container">
                <h2>
                    Конвертер найбільш поширених лучних величин
                </h2>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Inch - cm
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Дюйми - Сантиметри
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            Використовується для позначення довжини лука, стріли, витягу і т.п.
                        </div>
                        <ConverterInputs
                            labelFirst="Дюйми"
                            labelSecond="Сантиметри"
                            coef={2.56}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Pound - kg
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Фунти - Кілограми
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            Використовується для позначення сили натягу лука
                        </div>
                        <ConverterInputs
                            labelFirst="Фунти"
                            labelSecond="Кілограми"
                            coef={0.453592}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Grain - g
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Грани - Грами
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            Використовується для позначення ваги наконечника, стріли, т.п.
                        </div>
                        <ConverterInputs
                            labelFirst="Грани"
                            labelSecond="Грами"
                            coef={0.0647989}
                        />
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}