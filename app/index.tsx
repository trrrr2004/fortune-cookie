import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const App = () => {
    // Состояние для предсказания
    const [prediction, setPrediction] = useState('');

    // Массив предсказаний
    const predictions = [
        'Будь смелее в своём выборе.',
        'Мало знать себе цену — надо ещё пользоваться спросом.',
        'Скоро вы отправитесь в поездку.',
        'Будет новое приятное знакомство.',
        'Сегодня не путай настроение с самочувствием.',
        'Берегите людей, после встречи с которыми, что-то светлое и радостное поселяется в вашей душе.',
        'Сегодня следуй за настроением, никуда не сворачивай!',
        'Сегодня чаще смотри по сторонам, рядом кое-что интересное!',
        'Осторожно, впереди волна впечатлений!',
        'Не отказывай себе в отдыхе, он обещает быть незабываемым!',
        'Удача сопутствует твоим планам на следующей неделе!',
        'Просто скажи «Да». Скоро узнаешь, кому и когда!',
        'Обрати внимание на своё настроение — его тянет вверх!',
        'Вас ждёт немало приятных и запоминающихся моментов!',
        'Ваши романтические мечты сбудутся!',
        'Дом будет самым уютным местом!',
        'Ждите необычного признания в любви!',
        'Романтика переместит вас в новом направлении.',
        'Очень удачное время для воплощения любовных желаний.',
        'Улыбайся! Кто-то может влюбиться в твою улыбку!',
        'Сегодня для вас самый лучший день!',
        'Пришло время закончить старое и начать новое!',
        'Примите то, что вы не можете изменить, и вы будете чувствовать себя лучше!',
        'Удача проводит вас через все трудные времена!',
        'Счастливая жизнь прямо перед вами!'
    ];

    // Функция для выбора случайного предсказания
    const openFortuneCookie = () => {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        setPrediction(predictions[randomIndex]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Печенье с предсказанием</Text>

            {/* Изменили путь к изображению на локальный */}
            <Image
                source={require('..\\assets\\images\\cookie.png')} 
                style={styles.cookieImage}
            />

            <View style={styles.predictionBox}>
                <Text style={styles.predictionText}>
                    {prediction || 'Открой печенье, чтобы узнать своё предсказание!'}
                </Text>
            </View>
            <Button title="Открыть печенье" onPress={openFortuneCookie} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff8e1',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cookieImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    predictionBox: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    predictionText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
});

export default App;