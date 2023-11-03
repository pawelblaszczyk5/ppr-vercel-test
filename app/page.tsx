import { Button } from "#/app/button";
import { unstable_cache, unstable_noStore } from "next/cache";
import { Suspense } from "react";

const getStableRandomNumber = unstable_cache(
  async () => {
    await new Promise((res) => setTimeout(res, 1500));

    return Math.random();
  },
  ["random-number"],
  { tags: ["random-number"] }
);

const Slow = async () => {
  unstable_noStore();
  await new Promise((res) => setTimeout(res, 1500));

  return <p>Slow number generated: {Math.random()}</p>;
};

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <p>Stable random number: {await getStableRandomNumber()}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
        officiis mollitia nulla quae neque corrupti, tempora ut quo modi ipsum
        laboriosam inventore aperiam fuga et, velit amet in dolores? Labore!
        Obcaecati quidem facilis asperiores cumque? Quod doloribus tenetur
        officiis obcaecati a veritatis dolores cupiditate, voluptate ducimus,
        commodi voluptates. Distinctio architecto nemo quaerat nulla dolor earum
        velit nobis nesciunt rem atque? Accusantium et libero laboriosam, quidem
        ex ut qui dolorem doloribus modi minima facere dolor, explicabo ipsam
        tempore porro iusto possimus neque odio aut corporis? Mollitia fugit
        deleniti explicabo vel cumque. Sequi optio quae reiciendis similique ut,
        odio doloremque quasi, ex, incidunt rerum atque dolor ad cum aliquam
        quis! Necessitatibus quas laborum cupiditate. Vel a ut impedit deleniti
        ullam necessitatibus quis? Nostrum quisquam vero aut, dignissimos velit
        rem saepe, ut, asperiores aliquam quasi unde ea voluptatibus soluta!
        Quibusdam saepe voluptates omnis doloribus esse, a molestias deserunt
        quam vel quisquam quaerat ipsum! Debitis amet sequi totam ab quia
        voluptas dolor nostrum possimus aliquid sit illum quasi corporis,
        suscipit, in eum, perferendis non officia cupiditate voluptates quidem!
        Doloribus debitis qui quod quia dignissimos! Suscipit ducimus magnam
        repudiandae soluta commodi neque, dolore impedit recusandae qui debitis
        illum vitae fuga tempora veniam minus architecto laboriosam, facere
        provident temporibus natus officiis, explicabo deleniti laudantium. Non,
        perspiciatis? Cum aliquam facilis laboriosam animi perspiciatis quisquam
        unde, quos, qui exercitationem, sequi voluptates atque consequuntur
        tempora rerum ex dolores neque iste quia voluptatem architecto. Earum
        officia consectetur provident veritatis ipsam. Soluta, porro voluptate
        labore quas at, praesentium quae molestias fugit expedita inventore et
        asperiores rerum dicta enim magnam, culpa perferendis autem adipisci
        explicabo quasi! Doloremque explicabo in perspiciatis numquam totam?
        Sint inventore, alias voluptatibus facere suscipit architecto velit
        neque, dolores dicta temporibus voluptatem asperiores excepturi
        cupiditate explicabo reprehenderit voluptate! Nobis eaque odio alias
        cumque pariatur, debitis cupiditate ea dolor optio. Voluptas dolorum
        aliquid placeat itaque vero, voluptatem, sed culpa voluptatum
        exercitationem optio natus iste minima? Ut quia corporis id temporibus
        debitis eius ipsum, itaque ex neque dignissimos ducimus beatae. Facilis.
        Unde amet aut voluptatum, accusamus laudantium voluptates inventore. Ab
        consequuntur reiciendis odio deleniti dolores sint. Quo magnam eos
        magni, corporis incidunt quas tenetur ullam? Nulla modi asperiores
        necessitatibus nesciunt quidem? Repellendus, voluptate? Iusto harum
        dolor rem, quisquam eligendi unde esse voluptatum eius doloribus cumque
        aliquid architecto? Ea natus, expedita assumenda doloribus, illum
        laudantium laboriosam illo voluptatum animi veritatis quo molestiae.
        Nostrum ut similique quis quae id sit, exercitationem harum vero iure
        aperiam beatae maiores in doloremque laudantium placeat deleniti.
        Voluptatum officia quaerat blanditiis voluptatem, earum dolores sapiente
        vel aut rem? Omnis dicta ut enim repellendus, quod, minima, dolorum quia
        iste delectus adipisci temporibus porro. Laudantium sit tempore odit!
        Quaerat ipsam porro, corporis dolores provident libero ipsa doloribus
        mollitia nisi dicta! Quis vitae dignissimos harum aperiam perspiciatis
        laborum doloribus recusandae sequi cum? Autem nisi perspiciatis aut
        magni ipsam, velit blanditiis suscipit iste qui unde enim. Cum, sed vel.
        Tempora, eveniet unde. Sint fugit, aperiam, impedit dolore vel maiores
        velit minima dignissimos molestiae nisi commodi consequuntur natus porro
        consequatur, a eum ex cupiditate amet vero iste pariatur quae maxime?
        Eligendi, dolores ad. Fugit nam velit officiis unde, laborum assumenda
        maiores sit consectetur pariatur, in amet alias esse deserunt? Veniam
        qui perferendis explicabo, optio eius sapiente placeat officiis,
        veritatis quod, quo tempore nulla. Aliquid, accusamus omnis. Delectus
        libero autem dolorum, iure praesentium rem eveniet soluta magni sunt
        harum sapiente accusamus eligendi repudiandae, exercitationem iste
        fugiat consequuntur ex pariatur perferendis! Doloremque blanditiis
        nesciunt aliquid. Vero delectus, ullam perspiciatis officia iste
        expedita at cum sequi eos nesciunt magni sint amet quas, maiores
        repudiandae dolorum omnis odio quia praesentium, voluptatum explicabo
        aliquam fugiat. Magnam, nam ab. Repellat officia modi praesentium
        quisquam, necessitatibus explicabo dolor rem deserunt repudiandae
        inventore maxime iure voluptatem non accusantium libero aliquid cumque
        aliquam iste quidem, eum ullam aut. Consectetur officiis porro optio.
        Corrupti saepe inventore atque repudiandae aliquam quisquam architecto
        voluptas iure. Quia, iure distinctio laborum molestiae maxime dolore
        accusamus suscipit sed ipsam autem dignissimos a perspiciatis earum
        unde, dolorem, nesciunt nobis. Expedita quaerat incidunt provident
        soluta quod facilis, facere ex temporibus explicabo tempore esse omnis.
        Corporis inventore fugit tempora quas sed esse commodi, reiciendis id,
        repellendus voluptas facilis quaerat accusantium repellat! Tempore
        consectetur vitae eius ut cupiditate suscipit deserunt ullam quos eaque
        doloremque maxime consequuntur quas illum, optio magnam alias quasi
        reprehenderit beatae in veniam. Veritatis quis blanditiis sint
        distinctio minus? Accusamus, molestias! Quae et dolor reiciendis fugiat
        porro delectus aperiam dicta laudantium eaque ratione dolores aut,
        dolorem dolore modi repellendus quam nam eligendi minus vero suscipit
        nulla quas laboriosam adipisci. Aperiam natus optio atque quibusdam
        dolorum, nesciunt quasi aliquid vitae non quod, perspiciatis ea maxime
        dolores. Consequuntur sit odio quae eligendi veritatis odit rerum earum
        suscipit, ipsum cum eveniet ex! Eveniet voluptas soluta error, ipsa
        voluptatem deleniti ipsum est ut minus voluptate velit neque earum
        reiciendis, quisquam magni suscipit corrupti quam pariatur nulla labore?
        Voluptate praesentium minima eveniet corporis doloribus. Quos, corporis
        ad laudantium excepturi iusto natus magnam sequi molestias dicta
        deleniti. Magni modi, consequatur corrupti amet laborum esse error
        expedita id, voluptatem in fugiat. Dolorem sapiente quaerat at adipisci.
        Natus dignissimos minima id iure optio alias et totam non magni mollitia
        quae obcaecati exercitationem sapiente autem maxime numquam neque,
        asperiores aut. Nostrum quaerat commodi deserunt voluptatem, perferendis
        nesciunt inventore? Quasi, atque ad enim animi exercitationem voluptates
        quo magnam eaque tempora eum perferendis cum officiis provident
        molestias commodi quod facilis possimus obcaecati numquam, id minima
        quae. Iusto dolorem excepturi nesciunt! Reiciendis necessitatibus modi
        sunt facilis fugit omnis voluptatibus perferendis iusto! Cum maxime
        consectetur vel vitae aperiam facere deleniti nisi, sit tenetur ipsum ad
        sunt distinctio eligendi facilis nemo illum rerum! Maiores quis soluta
        doloremque cumque illo incidunt voluptas inventore accusamus itaque
        quaerat explicabo ducimus sequi eum ut magni dolorum nihil, deleniti ad.
        Sit id ratione repellendus vero eligendi hic at. Aliquid sit eligendi
        quasi culpa iure, at libero, natus assumenda doloribus, velit explicabo
        rem nulla ut aut magnam fugiat reprehenderit tempore possimus quibusdam
        amet optio minus. Libero cumque quisquam debitis! Alias molestias
        eveniet ut quasi iste, consequuntur sunt quaerat soluta nulla. Nemo,
        nostrum velit. Omnis vero sunt tempore culpa, voluptatem dolore
        aspernatur consectetur perferendis? Dolore nesciunt explicabo aut ex
        eius. Provident illo expedita reprehenderit deserunt optio eum nisi vero
        pariatur sapiente incidunt non sequi tempora praesentium, laboriosam
        rerum minus, assumenda quisquam atque quas! Beatae temporibus illo sit,
        quibusdam doloremque commodi? Iure ipsam cum fugit aperiam rem
        consectetur perferendis eius voluptate pariatur aliquam nostrum facere
        numquam tenetur obcaecati quia alias tempore adipisci dolorum vel odit,
        unde at accusantium cupiditate cumque. Vitae. Quaerat quam quia dolorum
        temporibus. Amet distinctio nisi reprehenderit accusamus sed sapiente
        doloremque aliquam animi ea dolore quasi quam repudiandae quos iusto,
        numquam eligendi officiis optio veritatis quae nihil consequatur?
        Consequatur exercitationem commodi qui natus atque esse velit nobis
        ullam nulla dolorum. Magni ea, nobis numquam, repudiandae itaque quo
        vitae saepe quae, corrupti officia libero dignissimos ratione ut modi
        laudantium. Rem mollitia et eaque qui iure distinctio ut, atque minima
        temporibus perferendis, asperiores soluta impedit sed cum natus aliquam
        eligendi eos. Temporibus sint vel voluptatem neque, esse minima quia
        consequatur? Accusantium vitae libero doloribus placeat quaerat facilis
        perspiciatis. Sit adipisci magni tenetur, nihil corrupti obcaecati
        officiis maiores, quibusdam eum nobis quia, ex at id iste minima et
        molestiae. Amet, dolor. Soluta aut tenetur, saepe ab expedita nisi,
        voluptates amet perferendis odio, distinctio alias. Totam facilis ex
        perferendis sunt quidem incidunt, tenetur aspernatur nisi quod veniam
        assumenda officiis praesentium est magnam. Repudiandae necessitatibus
        eum suscipit officia rerum doloribus magnam, eaque impedit.
        Necessitatibus asperiores officia at nulla eius iusto explicabo sed
        libero blanditiis. Corporis aliquam ratione nam veritatis reiciendis,
        saepe inventore nemo? Inventore temporibus necessitatibus neque in
        adipisci exercitationem aperiam totam minus, quisquam ea mollitia at
        repellat explicabo deleniti! Rem sequi veritatis corporis asperiores
        sint, iusto laboriosam quo quis, vitae qui saepe! Quasi provident
        perspiciatis possimus, obcaecati, alias natus in enim error, quod
        similique deserunt dolore! Exercitationem dolores temporibus quasi?
        Doloremque consequatur officia, ad odio sit nostrum similique maxime?
        Quisquam, sed inventore. Veniam repellendus enim quo consequuntur vitae
        corrupti adipisci nostrum incidunt. Consequuntur consequatur incidunt
        laboriosam temporibus tempore similique doloribus magni. Odio veritatis
        natus accusamus voluptatibus, dolorum laborum earum neque. Soluta,
        rerum. Veniam ratione totam deleniti ipsum dolorem deserunt voluptas
        molestias possimus rerum? Magnam, debitis? Atque est voluptatibus
        adipisci at tempora quidem velit eos amet. Magnam id, maiores officiis
        natus ipsa quos! Debitis expedita pariatur, mollitia molestias iure
        itaque obcaecati assumenda esse magni, officiis, voluptatum dolore
        eveniet tempore accusamus ducimus consequuntur ex quos deleniti ipsum
        quidem. Iste illum nihil repudiandae odit eius. Libero omnis asperiores
        quia perspiciatis vitae doloremque voluptatem provident debitis at quos
        beatae saepe iste hic cumque, consequuntur facere consectetur placeat
        voluptatibus. Molestias dicta soluta natus mollitia consectetur minima
        optio. Animi ex placeat minus aliquid commodi eos, architecto cupiditate
        eius, aliquam cumque sint? Minima, ea optio nulla labore reprehenderit,
        totam numquam, incidunt recusandae quod debitis in? Porro a quia quidem.
        Magnam doloribus officiis ea asperiores earum quisquam dolorum minima
        soluta est illum a maiores tempora cumque suscipit, labore aspernatur
        porro neque placeat cum maxime consequatur id explicabo! Explicabo, ad
        reiciendis. Accusamus, ratione exercitationem similique voluptas
        architecto, laboriosam nostrum dolorum quia sunt repudiandae repellendus
        veniam laborum! Quibusdam est corporis nihil odit, nemo beatae, odio
        impedit, necessitatibus a consectetur sit sequi dolor! Adipisci
        voluptatem, rem temporibus earum ullam consequuntur ea quos atque natus
        id fugit mollitia architecto sint fugiat dolores, reprehenderit magni
        repellendus quisquam voluptates dolor beatae? Eius saepe sit harum id.
        Quibusdam debitis, iusto ratione ad tempore suscipit saepe modi,
        deleniti ullam iste est. Cupiditate, suscipit possimus iusto doloremque,
        repellendus quis ab quidem rerum quos libero consectetur perferendis in
        ratione voluptas. Earum culpa voluptates rerum repellendus! Quisquam
        nisi sapiente molestiae cumque? Distinctio, blanditiis debitis!
        Quibusdam voluptatum necessitatibus eius deserunt nulla amet iusto,
        eaque sit maxime mollitia soluta repellat debitis inventore nostrum! Eos
        doloribus atque sunt. Hic veniam aut dolores eveniet voluptates a
        obcaecati ea eaque quia perspiciatis repellat, ipsam, fugiat iusto
        consequuntur culpa excepturi dicta! Qui quibusdam sed quis earum cum!
        Reiciendis ratione ut ipsa magni? Consequuntur harum accusantium ducimus
        accusamus. Praesentium architecto tempora ipsum itaque sequi veritatis
        nulla possimus. Sequi cumque impedit dolorum ex eligendi nostrum in
        perspiciatis nulla pariatur. Laborum incidunt magnam, hic accusamus
        provident officia voluptas a reprehenderit at eius quae pariatur
        molestiae deleniti commodi voluptatibus. Corrupti quidem rerum iure
        eligendi nostrum magni eos vitae reiciendis facilis commodi? Expedita
        est accusantium voluptas quod pariatur deserunt soluta eum. Placeat hic
        praesentium harum dignissimos velit rerum adipisci repellendus
        consequatur ea. Natus sint reprehenderit minus, vel esse architecto
        facere maiores fuga? Repellat ut esse mollitia ipsa expedita inventore
        nisi laboriosam quo, aliquam quasi doloremque, nobis in sed fugit! Ab
        necessitatibus harum illum rem maxime saepe, repudiandae quibusdam
        voluptatem rerum aspernatur natus. Numquam illum aliquam tempora
        inventore vitae accusantium optio veritatis quos deserunt facilis
        ducimus, dolore ea molestias quia reiciendis culpa cum cupiditate itaque
        deleniti praesentium! Quaerat corrupti sunt fuga iure consequuntur! Quod
        distinctio consequatur est architecto earum commodi eius veniam hic
        aspernatur, velit corrupti laudantium corporis deserunt blanditiis
        adipisci, ad animi. Earum omnis est quam. Repudiandae ad a quis
        necessitatibus enim! Quas, qui minima, ipsum sapiente quo impedit natus
        deleniti laborum tenetur amet consequuntur magni sequi est quam neque
        voluptates nisi possimus quae incidunt ipsa. Dolorem tenetur est porro
        eius at. Commodi praesentium, atque repellat alias sint eum veniam quam
        tenetur, necessitatibus vero minus animi odit quasi aspernatur debitis
        natus laudantium eaque assumenda tempora magnam! Voluptatibus quidem ab
        omnis aperiam eligendi? Sit, tenetur voluptatibus unde eaque nostrum
        perspiciatis? Corrupti, tempore facere. Tempore iste amet illo
        voluptatum corporis nostrum minima sapiente, rerum fugiat repellendus
        sit quis, ea suscipit asperiores id incidunt earum. Deserunt dolores nam
        illum? Molestias, odio repellat dolores nobis porro quaerat. Maxime
        dolore, vero odio dolorum nam fuga neque natus maiores. Eaque totam
        ratione nesciunt ad enim ullam voluptas hic? Atque est, odit facere
        doloremque consequatur tempora, porro placeat corrupti, harum dolorum
        earum amet. Dignissimos quidem earum at magni voluptatibus consequatur
        commodi odio, dolorum beatae perspiciatis, ut molestias atque suscipit!
        Nemo accusantium unde mollitia eius aspernatur, tenetur reiciendis, ea
        tempora explicabo itaque praesentium dicta. Est vero cum exercitationem
        possimus veniam numquam perspiciatis? Ab, eaque. Repellendus ex sunt
        voluptate iure. Porro. Voluptatum fugiat vel dicta debitis optio et
        dolore veritatis delectus officiis quidem modi enim cum magni sunt
        consequatur nemo laborum neque officia dolor, magnam eos, sequi
        architecto porro velit? Quos. Voluptate doloribus quidem, repudiandae
        quaerat officiis beatae voluptatem eligendi ab est enim adipisci,
        temporibus, mollitia quibusdam sapiente! Voluptatem possimus tempore,
        dolore asperiores suscipit obcaecati cumque dolores aliquid est porro
        autem! Quas odit doloremque tempore doloribus mollitia accusamus cum
        perspiciatis vitae, fugit recusandae amet molestiae modi impedit
        aspernatur quia? Et nisi rem doloribus iure, repellendus voluptatem
        perspiciatis neque! Fugit, eum molestiae. Officiis expedita iure debitis
        sapiente perspiciatis temporibus incidunt nihil non facilis officia et
        porro delectus nulla recusandae numquam quo consequuntur, magnam quis
        exercitationem harum unde placeat consequatur, ipsam veniam.
        Exercitationem. Vitae velit doloremque magni iste in laborum sit minima
        quas nisi accusantium placeat, dicta aliquam temporibus beatae et nulla
        molestiae corrupti. Sapiente nulla aliquam rerum non in nisi eaque
        quaerat! Voluptatem, quidem. Deserunt recusandae, asperiores alias cum
        et consequatur obcaecati distinctio maxime repudiandae. Possimus,
        deleniti? Incidunt libero nam voluptate? Iste architecto laudantium
        natus sequi dolor tempore ad beatae, accusamus error! Ullam maiores
        assumenda fuga corrupti cumque enim suscipit accusantium veniam maxime
        reprehenderit harum odio eaque distinctio, optio, voluptates qui iusto
        eius sapiente similique. Doloremque, excepturi? Velit voluptatibus et
        animi doloremque! Veniam, nulla magni doloribus ex maxime voluptas est
        dolore provident pariatur ab obcaecati? Hic, sapiente iure mollitia esse
        nemo earum ex laborum facilis dolorum sequi incidunt alias, nobis vero!
        Nam.
      </p>
      <Suspense fallback={<p>Loading slow number</p>}>
        <Slow></Slow>
      </Suspense>
      <Button></Button>
    </main>
  );
};

export default Home;
