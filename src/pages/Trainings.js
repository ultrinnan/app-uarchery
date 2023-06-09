import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {Delete} from "@mui/icons-material";
import AlertDialog from "../components/Dialogs/AlertDialog";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InfoIcon from '@mui/icons-material/Info';
import InfoDialog from "../components/Dialogs/InfoDialog";

export default function Training() {
    const [showInfo, setShowInfo] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [trainings, setTrainings] = useState([]);
    const [activeTraining, setActiveTraining] = useState(null);

    const handleAddItem = () => {
        const newTraining = {
            title: `Тренування ${trainings.length + 1}`,
            date: new Date(),
            totalScore: 0,
        };
        setTrainings([newTraining, ...trainings]);
    };

    const handleClose = () => {
        setConfirm(false);
        setShowInfo(false);
        console.log('cancel');
    }
    const handleConfirm = () => {
        setConfirm(false);
        handleRemoveItem();
        console.log('delete!');
    }

    const handleRemoveItem = () => {
        console.log('active training - ', activeTraining);
        setTrainings(trainings.filter((elem) => elem.date !== activeTraining));
        setActiveTraining(null);
    }

    return (
        <section>
            <InfoDialog
                open={showInfo}
                handleClose={() => handleClose()}
                description={`Розділ "МОЇ ТРЕНУВАННЯ" дозволяє створювати будь яку кількість персональних тренувань, обирати мішень, відстань, кількість стріл та інші параметри.
                По кожному тренуванню доступна детальна статистика, якою з часом можна буде поділитися з друзями.
                ВАЖЛИВО: інформація про тренування нікуди не передається та не синхронізується (принаймні на даний момент). Тому дані зберігаються виключно на поточному пристої.`}
            />
            <div className="container">
                <h2>
                    Мої тренування&nbsp;
                    <button
                        className="button clear_button"
                        type="button"
                        onClick={() => setShowInfo(true)}
                    >
                        <InfoIcon />
                    </button>
                </h2>
                <AlertDialog
                    question="Видалити тренування?"
                    hint="Всі результати цього тренування будуть видалені"
                    open={confirm}
                    handleClose={() => handleClose()}
                    handleConfirm={() => handleConfirm()}
                />
                <List sx={{ width: '100%' }}>
                    {trainings.map((training, index) => (
                        <ListItem
                            className="trainings_item"
                            key={index}
                            secondaryAction={
                                <button
                                    className="button clear_button"
                                    type="button"
                                    aria-label="comment"
                                    onClick={() => {
                                        setActiveTraining(training.date);
                                        setConfirm(true)
                                    }}
                                >
                                    <Delete />
                                </button>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <ArrowOutwardIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={training.title}
                                secondary={training.date.toLocaleDateString("uk-UA")}
                            />
                        </ListItem>
                    ))}
                </List>
                <button
                    type="button"
                    className="button add"
                    onClick={handleAddItem}
                >
                    +
                </button>
            </div>
        </section>
    );
}