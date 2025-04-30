
import { styled } from '@mui/material/styles';
import {
    List,
    ListItem,
} from '@mui/material';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: 0,
    paddingRight: 0,
    display: 'block',
    marginBottom: theme.spacing(1),
}));

export const stepOneContent = (
    <>
        <p>Dein erster Schritt: Prüfe, ob du dich einbürgern lassen kannst. Dafür kannst du den Quick-Check (↓) im Berliner ServicePortal nutzen. Der Quick Check ist kostenlos und bietet eine erste Orientierung. Er ersetzt keine offizielle Prüfung deines Antrags.</p>
        <p>Wenn du die Voraussetzungen erfüllst, kannst du den Antrag auf Einbürgerung stellen. Sammle dafür deine Unterlagen zusammen. Unsere Seite „Meine Unterlagen" (↓) unterstützt dich dabei. Das Ausfüllen des Online-Antrags dauert mindestens zwei Stunden. Das machst du im Berliner ServicePortal.</p>
    </>
);

export const stepTwoContent = (
    <p>Der Antrag kostet 255,00 Euro. Du musst per Kreditkarte oder Paypal zahlen. Es kann mehr Geld kosten, wenn du deine bisherige Staatsangehörigkeit aufgibst. Informiere dich darüber beim Konsulat von deinem Heimatland.</p>
);

export const stepThreeContent = (
    <>
        <p>Du benötigst „ausreichende Deutschkenntnisse". Das bedeutet ein Niveau B1 oder mehr. Dafür brauchst du auch ein Zertifikat.</p>
        <List sx={{ pl: 2 }}>
            <StyledListItem>
                • Ich besuche keinen Deutschkurs.<br />
                Dann besuche einen Deutschkurs. Wie das geht und wo in Berlin du einen Deutschkurs machen kannst, findest du hier (↓).
            </StyledListItem>
            <StyledListItem>
                • Ich spreche Deutsch aber habe kein Zertifikat.<br />
                Dann kannst du eine Prüfung machen. Das geht bei den Volkshochschulen in Berlin (↓), beim Goethe-Institut (↓) oder bei anderen Anbietern. Dort erfährst du auch die Termine und die Kosten. Wenn du die Prüfung bestehst, bekommst du das Zertifikat.
            </StyledListItem>
            <StyledListItem>
                • Ich gehe in Deutschland zur Schule oder bin in Deutschland zur Schule gegangen.<br />
                Dann brauchst du nur ein Nachweis darüber. Mehr Informationen findest du unter „Meine Unterlagen".
            </StyledListItem>
        </List>
    </>
);

export const stepFourContent = (
    <>
        <p>Du musst nachweisen, dass du deinen Lebensunterhalt sicherst. Das bedeutet, dass du genug Geld zum Leben hast. Wie viel das genau ist, muss persönlich für dich berechnet werden. Das hängt davon ab, ob du alleine lebst oder mit deiner Familie oder wie viel Miete du zahlst.</p>
        <p>Wenn du dir unsicher bist, ob dein Einkommen reicht, dann frag in einer Beratungsstelle [L]. Für die Einbürgerung darfst du in den meisten Fällen keine Sozialleistungen oder Bürgergeld bekommen.</p>
    </>
);

export const stepFiveContent = (
    <p>Für die Einbürgerung zählt die Zeit mit einem rechtmäßigen Aufenthalt. Das bedeutet die Zeit, in der du eine Aufenthaltserlaubnis oder einen unbefristeten Aufenthalt hattest. Eine Aufenthaltserlaubnis für Arbeit, Studium, Familiennachzug oder ein Schutzstatus zählen. Auch eine Niederlassungserlaubnis zählt. Duldungen und Aufenthaltsgestattungen zählen nicht. Beim Wechsel von einem Aufenthaltstitel in einen anderen zählt die bisherige Aufenthaltsdauer weiter. Wichtig ist, dass es keine Unterbrechung gibt. Eine Fiktionsbescheinigung ist keine Unterbrechung. Die Zeit zwischen zwei Aufenthaltstiteln geht nicht verloren, wenn du eine Fiktionsbescheinigung hattest.</p>
);

export const stepSixContent = (
    <>
        <List sx={{ pl: 2 }}>
            <StyledListItem>
                • Du hast deinen Antrag im Jahr 2023 oder früher gestellt und noch immer keine Antwort?<br />
                Seit 2024 werden die Anträge online beim Landesamt für Einwanderung (LEA) gestellt. Früher wurden die Anträge auf Papier im Bezirksamt gestellt. Das LEA hat über 40.000 unbearbeitete Anträge von den Bezirken übernommen, auch Anträge aus dem Jahr 2005. Die Anträge auf Papier werden langsam bearbeitet. Leider können wir nicht sagen, wann es für deinen Antrag eine Entscheidung gibt. Wenn du schnell ein Ergebnis brauchst, kannst du deinen Antrag noch einmal online stellen. Aber Achtung: Dann musst du auch die Kosten von 255 Euro noch einmal zahlen. Außerdem solltest du den Antrag nur noch mal stellen, wenn du alle Voraussetzungen für die Einbürgerung erfüllst. Mache hierfür den Quick-Check! Welche Unterlagen du brauchst, findest du unter „Meine Unterlagen“.
            </StyledListItem>
            <StyledListItem>
                • Du hast deinen Antrag im Jahr 2024 oder später gestellt?<br />
                Auch wenn du deinen Antrag online gestellt hast, kann es zu einer Wartezeit kommen. Wie lange es dauert, hängt zum Beispiel davon ab, ob deine Unterlagen vollständig und aktuell sind. Keine Sorge: Das LEA meldet sich bei dir, wenn etwas fehlt. Bitte gedulde dich bis dahin.
            </StyledListItem>
        </List>
    </>
);