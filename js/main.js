// רשימה של המערכות
const jsonData = {

    "generators": [

        {

            "id": 1,
             "pic": "DiningRoom.png",
            
            "title": "חדר אוכל",

            "abstract": "מקום המספק ארוחות טעימות ותזונה מאוזנת, תוך יציבת אווירה חמימה ואיכותית. כאן, ניתן למצוא מגוון של תפריטים המתאימים לצרכי כל תושב.",

            "fullContent": "חדר האוכל מתאים לצרכים תזונתיים אישיים ומספק ארוחות בריאות באווירה חמה ומזמינה. במקום ניתן ליהנות ממגוון תפריטים, יחד עם תחושת פנאי וחברות, יוצרת חוויה אכילתית חברתית ונעימה.",

            "cat": "מטופלים"

        },

       {

            "id": 2,
            "pic": "Synagogue.png",

            "title": "בית כנסת",

            "abstract": "מקום שמאפשר חוויית נופש רוחנית ותיקשורתית, פתוח לכל התושבים. ניתן להשתתף בפעילויות דתיות וליהנות מאווירה רוחנית.",

            "fullContent":"בבית הכנסת בתוך בית החולים, מתקיימים תפילות דתיות המעניקות תחושת שלווה רוחנית למאושפזים. המקום מספק אווירה אינטימית ומזמינה, ומאפשר התחברות חברתית ונפשית במסגרת הטיפול והשיקום.",

            "cat": "ציבורי"

        },

 {

            "id": 3,
            "pic": "TreatmentRoom.png",

            "title": "חדרי טיפול",

            "abstract": "מקום שמאפשר חוויית נופש רוחנית ותיקשורתית, פתוח לכל התושבים. ניתן להשתתף בפעילויות דתיות וליהנות מאווירה רוחנית.",

            "fullContent":"חדרי הטיפול המתקדמים מספקים טיפולים אישיים ומותאמים לצרכים הרפואיים של כל מטופל. בכל חדר יש ציוד פיזיותרפי מתקדם וטכנולוגיות שמקדמות את תהליכי השיקום. הצוות המקצועי והמנוסה יפעיל טיפול יעיל ומקצועי, מקנה חוויה חיובית ותורמת להבטחת השיקום האופטימלי.",

            "cat": "מטופלים"

        }, {

            "id": 4,
            "pic": "Facilities.png",

            "title": "מתקנים",

            "abstract":"מתקנים משופצים ומצוידים, המספקים תשומת לב ונוחות. ניתן למצוא ציוד רפואי מתקדם וטכנולוגיות חדישות.",

            "fullContent":"ישנם חדרי פיזיותרפיה מאובזרים בכלים מתקדמים לאימונים ושיקום פיזי. חדרי טיפול רפואי מתמקדים בהחזרת יכולת תפקודית, וישנם מתקנים לאמבולנסיה ופיקוח רפואי מתקדם. כל אחד מהמתקנים משרת את צורך המטופלים ומסייע בשיקום והחלקה מהירים.",

            "cat": "צוות"

        }, {

            "id": 5,
            "pic": "SocialWorker.png",

            "title": "חדר עובדת סוציאלית",

            "abstract": "מקום אשר מספק תמיכה רגשית וחברתית מתקדמת, ובו עובדת סוציאלית מיומנת המסייעת בהתמודדות עם אתגרים חיים.",

            "fullContent":"ההגעה לחדר זה בתיאום טיפול מראש, ניתן לבקש יותר טיפולים במידת הצורך וההרגשה. העובדת הסוציאלית מקצועית ומנוסה, תפקידה לתמוך את המאושפזים בהתמודדות עם אתגרים באשפוז, בתהליך השיקום ובמחשבות המלוות כל מטופל על הפציעה והעתיד. החדר מספק פרטיות ותמיכה, באווירה חמה, מכילה ורגועה.",

            "cat": "מטופלים"

        }, {

            "id": 6,
            "pic": "SeatingArea.png",

            "title": "פינות ישיבה",

            "abstract": "פינות נעימות ומזמינות המתאימות לפגישות משפחתיות, פעילויות קבוצתיות ונפגשות חברתיות.",

            "fullContent":"פינות הישיבה בבית החולים השיקומי מספקות אזורי מפגש ושחרור עם יושבי המקום. באווירה נעימה ורגועה, הפינות מכילות רהיטים נוחים, מגוון ספרים ופעילויות קהילתיות להנאה והתחברות חברתית.",

            "cat": "ציבורי"

        }, {

            "id": 7,
            "pic": "NursingStand.png",

            "title": "עמדת אחיות",

            "abstract": "מקום שבו ניתן לקבל עזרה רפואית מיומנת ומקצועית מאחיות מנוסות, השומרות על בטיחות וטיפוח התושבים.",

            "fullContent":"עמדת האחיות בבית החולים השיקומי מספקת שירות רפואי מקצועי. האחיות זמינות 24/7 לספק תמיכה רפואית, לניהול תרומות וטיפול בחירום. ניתן לפנות אליהן לשאלות, נגיעות רפואיות ובכל נוגע לטיפול ודאגה למטופלים.",

            "cat": "ציבורי"

        }, {

            "id": 8,
            "pic": "RestRoom.png",

            "title": "שירותים",

            "abstract":"שירותי תשתיות כמו מקלחות, שירותים וכיווניות נגישים ונוחים לשימוש, תוך התחשבות בצרכי תושבי המרכז.",

            "fullContent":"השירותים במקום מותאמים לצרכי התושבים ומספקים נוחות ופרטיות. המקלחות והשירותים עומדים בסטנדרטים גבוהים של נגישות וניקיון.",

            "cat": "ציבורי"

        }, {

            "id": 9,
           "pic": "Kitchenette.png",

            "title": "מטבחון",

            "abstract":"מקום מסודר ומאובזר המאפשר לתושבים להכין או להתעדן בכיף ובנוחות.",

            "fullContent":"המטבחון בבית החולים השיקומי מספק מקום קטן ונעים להכנת וצריבת מזון. הוא מצויד במקרר, מיקרוגל, כיור, וכלי צלחת. המטבחון זמין לשימוש עבור המאושפזים בכל שעות היום והלילה, מאפשר גם הרתחת מים והכנת קפה.",

            "cat": "צוות"

        }, {

            "id": 10,
            "pic": "MyRoom.png",

            "title": "החדר שלי",

            "abstract":"חלל אישי ומזמין, מותאם לצרכים הרפואיים והאישיים של כל תושב. מספק פרטיות ושקט לשיקום יעיל.",

            "fullContent":"חדר האשפוז הפרטי הוא מקום אינטימי ורגוע, כל מטופל מקבל את המרחב הפרטי שלו. בחדר זה יש מיטה נוחה, ארון, טלוויזיה, ושולחן עבודה. החלל מספק פרטיות מוחלטת למטופל, מסייע ביצירת תחושת ביטחון ונוחות במהלך תקופת האשפוז.",

            "cat": "מטופלים"

        }

    ]

}

function searchItems() {
    // קבלת הערך שנקלט בתיבת החיפוש
    const searchString = document.getElementById('searchInput').value.toLowerCase();
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = ''; // לנקות את התוכן הקיים בכדי להציג את התוצאות של החיפוש

    jsonData.generators.forEach(generator => {
        // בדיקה האם הכותרת של הפריט מכילה את המחרוזת שנקלטה בתיבת החיפוש
        if (generator.title.toLowerCase().includes(searchString)) {
            // אם כן, יצירת הפריט והוספתו לקונטיינר
            const card = createCard(generator);
            itemsContainer.appendChild(card);
        }
    });
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems()
});

function createItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.setAttribute("class", "row");

    jsonData.generators.forEach(generator => {
        const card = createCard(generator); // יצירת כרטיס עבור הנושא
        itemsContainer.appendChild(card); // הוספת הכרטיס לתוך הקונטיינר
    });
}

function createCard(generator) {
    // יצירת אלמנטי HTML עבור הכרטיס
    const myCard = document.createElement("div");
    myCard.setAttribute("class", "card col-sm-6");
    myCard.setAttribute("style", "width: 19rem;");

    const myImg = document.createElement("img");
    myImg.setAttribute("src", `img/${generator.pic}`);

    const myCardBody = document.createElement("div");
    myCardBody.setAttribute("class", "card-body");

    const myCardTitle = document.createElement("h5");
    myCardTitle.setAttribute("class", "card-title");
    myCardTitle.innerHTML = `${generator.title}`;
    myCardTitle.setAttribute("id", `id_${generator.id}`);

    const myCardAbstract = document.createElement("p");
    myCardAbstract.innerHTML = generator.abstract;

    const readMoreBtn = document.createElement("button");
    readMoreBtn.innerHTML = "מידע נוסף";
    readMoreBtn.setAttribute("class", "catBtn");
    readMoreBtn.addEventListener("click", () => toggleCardContent(myCard, generator.fullContent));

    // הוספת אלמנטי הכרטיס לכרטיס
    myCardBody.appendChild(myCardTitle);
    myCardBody.appendChild(myCardAbstract);
    myCardBody.appendChild(readMoreBtn);

    myCard.appendChild(myImg);
    myCard.appendChild(myCardBody);

    return myCard;
}

function toggleCardContent(card, fullContent) {
    const cardBody = card.querySelector(".card-body");

    if (!cardBody.hasAttribute("data-original-state")) {
        // Store the original state
        const originalState = cardBody.innerHTML;
        cardBody.setAttribute("data-original-state", originalState);
    }

    if (cardBody.classList.contains("expanded")) {
        // Collapse the card content
        const originalState = cardBody.getAttribute("data-original-state");
        cardBody.innerHTML = originalState;
        cardBody.classList.remove("expanded");
    } else {
        // Expand the card content
        cardBody.innerHTML = `<h5 class="card-title">${cardBody.querySelector(".card-title").innerHTML}</h5>
                             <p>${fullContent}</p>
                             <button class="btn catBtn" onclick="toggleCardContent(this.parentNode.parentNode, '${fullContent}')">סגור</button>`;
        cardBody.classList.add("expanded");
    }
}

function filterItems(category) {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = ''; // לנקות את התוכן הקיים בכדי לסנן מחדש

    jsonData.generators.forEach(generator => {
        // בדיקה אם הנושא משתייך לקטגוריה הנבחרת
        if ((category === 'מטופלים' && generator.cat === 'מטופלים') ||
            (category === 'ציבורי' && generator.cat === 'ציבורי') ||
            (category === 'צוות' && generator.cat === 'צוות')) {
            // רק נוסיף את הפריט אם הוא משתייך לקטגוריה הרלוונטית
            const card = createCard(generator); // יצירת כרטיס עבור הנושא
            itemsContainer.appendChild(card); // הוספת הכרטיס לתוך הקונטיינר
        }
    });
}

function clearFilter() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = ''; // לנקות את התוכן הקיים בכדי להציג את כל הנושאים שוב
    createItems(); // יצירת הנושאים מחדש
}

function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

function publishReview() {
    const reviewInput = document.getElementById('reviewInput').value;
    if (reviewInput.trim() !== '') {
        const reviewList = document.getElementById('reviewList');
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('mb-2');

        // יצירת אלמנטים עבור האייקון של האווטאר, תאריך ושעה
        const avatarIcon = document.createElement('i');
        avatarIcon.classList.add('bi', 'bi-person', 'me-2');

        const currentDate = new Date();
        const dateTimeString = currentDate.toLocaleString('he-IL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
        const dateTimeElement = document.createElement('div');
        dateTimeElement.innerHTML = '<small>' + dateTimeString + '</small>';

        // הוספת האייקון של האווטאר לפני תוכן הביקורת
        reviewItem.appendChild(avatarIcon);

        // הוספת התאריך והשעה לפני תוכן הביקורת
        reviewItem.appendChild(dateTimeElement);

        // הוספת תוכן הביקורת
        const reviewContentElement = document.createElement('div');
        reviewContentElement.innerHTML = reviewInput;
        reviewItem.appendChild(reviewContentElement);

        // הוספת הפריט של הביקורת לרשימה
        reviewList.appendChild(reviewItem);

        // הוספת קו פרידה בין כל ביקורת
        const separator = document.createElement('hr');
        reviewList.appendChild(separator);

        // לאחר הפרסום, ניקוי השדה
        document.getElementById('reviewInput').value = '';
    } else {
        alert('אנא הזן ביקורת לפני לחיצה על פרסם.');
    }
}

