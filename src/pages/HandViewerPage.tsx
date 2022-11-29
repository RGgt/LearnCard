import { Link, useParams } from 'react-router-dom';

export function HandViewerPage() {
  const { topic, collection, hand } = useParams();
  return (
    <>
      <h1>View set</h1>
      <ul>
        <li>
          Topic: <strong>{topic}</strong>
        </li>
        <li>
          Collection: <strong>{collection}</strong>
        </li>
        <li>
          Set: <strong>{hand}</strong>
        </li>
      </ul>
      <br />
      <p>
        {topic === 'german-for-english'
          ? 'Deutsches Ipsum Dolor sit Schwarzwälder Kirschtorte consectetur Hamburg elit, Bahnhof do Berlin tempor Hörspiele ut Knappwurst et Lebkuchen magna Bier Ut HugoClub Mate ad Umsatzanalyse veniam, Die Toten Hosen nostrud Käsefondue ullamco Herr Doktor nisi Erbsenzähler aliquip Autobahn ea Oktoberfest consequat. Stuttgart aute Michael Schuhmacher dolor Nackenheim reprehenderit genau voluptate Kirschkerne esse Welt dolore Apfelschorle fugiat Sauerkraut pariatur. Schmetterling sint Bier cupidatat Schneewittchen proident, Herr Doktor in Autobahn qui Hamburg deserunt genau anim Weltschmerz est HugoClub Mate'
          : '22 Abréis los miscra cinos de virópir quería nelo Obseñor ota aquosi vo de á forea de: En des modia erel cogrus do paresto ción. 190. Los del ahomal paread ras y ensfes de funtem dándo poro tronda reucia por: La soso. Etents esestre es ga. Nepúbla se Crecía Cuacia que es los bresdo dintró Roque verába, paria susile To el la ler de - A la pue derá la sión ens. Por, magunqui restigni parbota; y conas futen men no X (como hello nuos. 75 Aunte lo pro. quía. Hijola mul peré tatall cablas quimpo dente pon y hacion él a y es.'}
      </p>
      <br />
      <Link to="/">HOME</Link>
    </>
  );
}
