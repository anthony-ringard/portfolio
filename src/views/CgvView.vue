<script setup lang="ts">
import { computed } from "vue";
import { profile } from "../lib/content";
import { buildMailHref, revealEmail } from "../lib/email";
import { useSeo } from "../composables/useSeo";

useSeo(
  "CGV — Service d'audit de code | Anthony Ringard",
  "Conditions générales de vente du service d'audit de code PHP/Symfony proposé par Anthony Ringard, freelance.",
  "/cgv",
);

const email = computed(() => revealEmail(profile.contact.emailObfuscated));
const mailHref = computed(() => buildMailHref(email.value, "Question CGV", ""));
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20 md:py-28">
    <p class="section-label">Conditions générales de vente</p>
    <h1 class="font-display mt-4 text-3xl text-ink md:text-4xl">CGV — Service d'audit de code</h1>
    <p class="mt-3 text-sm text-ink/50">
      Dernière mise à jour :
      {{ new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" }) }}
    </p>

    <div class="prose-cgv mt-10 space-y-8 text-sm leading-7 text-ink/75">
      <section>
        <h2 class="text-base font-semibold text-ink">Article 1 — Qui vend quoi</h2>
        <p class="mt-2">
          Les présentes conditions générales de vente (CGV) régissent la vente du service
          d'audit de code ("Audit Express" et "Audit Standard") proposé par
          <strong>{{ profile.name }}</strong>, développeur freelance exerçant en entreprise
          individuelle (micro-entrepreneur), SIRET 109 001 685 00014, domicilié dans le
          département du Nord (62), France. Contact :
          <a :href="mailHref" class="underline underline-offset-2">{{ email }}</a>.
        </p>
        <p class="mt-2">
          Toute commande passée via le site implique l'acceptation pleine et entière des
          présentes CGV, sans réserve.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 2 — Nature de la prestation</h2>
        <p class="mt-2">
          Le prestataire réalise une analyse technique d'un code source fourni par le client
          (lecture, identification de risques techniques, dette technique, points de fragilité)
          et restitue un rapport écrit structuré.
        </p>
        <p class="mt-2">
          <strong>Ce service est une analyse best-effort, pas un audit de sécurité certifié ni
          un test d'intrusion (pentest).</strong> Il ne constitue pas une garantie d'absence de
          bug, de faille de sécurité ou de dysfonctionnement, présent ou futur. Le prestataire
          est tenu à une <strong>obligation de moyens</strong>, non de résultat.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 3 — Offres et périmètre</h2>
        <ul class="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Audit Express</strong> : analyse d'1 service, jusqu'à 40 fichiers, rapport
            écrit, sans échange oral inclus.
          </li>
          <li>
            <strong>Audit Standard</strong> : scope élargi (plusieurs services), rapport écrit +
            20 minutes d'échange oral de restitution.
          </li>
        </ul>
        <p class="mt-2">
          Le périmètre exact (dépôt(s) de code, langage/stack, volume) est figé d'un commun
          accord avant le début de l'intervention. Toute demande dépassant le périmètre convenu
          fait l'objet d'un devis complémentaire distinct, jamais d'une exécution tacite.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 4 — Prix et paiement</h2>
        <p class="mt-2">
          Les prix sont indiqués en euros, toutes taxes comprises le cas échéant (TVA non
          applicable, art. 293 B du CGI, sauf mention contraire). Le paiement est exigible
          intégralement et par avance, via la plateforme Stripe (carte bancaire ou moyen de
          paiement proposé), au moment de la commande.
        </p>
        <p class="mt-2">
          Les tarifs de lancement affichés sont temporaires et réservés aux premières commandes ;
          ils peuvent être retirés à tout moment sans préavis pour les commandes futures (sans
          effet rétroactif sur les commandes déjà payées).
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 5 — Accès au code et confidentialité</h2>
        <ul class="mt-2 list-disc space-y-1.5 pl-5">
          <li>Le client fournit un accès en lecture seule au code à auditer.</li>
          <li>
            Le prestataire s'engage à ne pas copier, réutiliser, publier ou divulguer tout ou
            partie du code, des données ou des informations confidentielles du client, sans
            accord écrit préalable.
          </li>
          <li>L'accès et toute copie locale du code sont supprimés à l'issue de la prestation.</li>
          <li>
            Aucune étude de cas, capture ou extrait du projet ne sera publié ou communiqué à des
            tiers sans l'accord écrit explicite du client.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 6 — Délai de livraison</h2>
        <p class="mt-2">
          Le rapport est livré sous 5 jours ouvrés à compter de la réception effective d'un accès
          exploitable au code. Ce délai est indicatif et court à partir d'un accès complet et
          fonctionnel ; tout retard dans la fourniture de l'accès décale d'autant la livraison.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 7 — Droit de rétractation</h2>
        <p class="mt-2">
          Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation
          ne peut être exercé pour les contrats de prestation de services pleinement exécutés
          avant la fin du délai de rétractation, dont l'exécution a commencé après accord
          préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
        </p>
        <p class="mt-2">
          En validant sa commande et en transmettant l'accès au code immédiatement après
          paiement, le client particulier demande expressément le commencement immédiat de la
          prestation et renonce à son droit de rétractation de 14 jours une fois le rapport
          livré.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 8 — Responsabilité</h2>
        <p class="mt-2">
          Le rapport reflète une analyse à un instant donné, sur la base du code fourni. Le
          prestataire ne saurait être tenu responsable des conséquences d'une décision prise par
          le client sur la base du rapport, ni des problèmes non détectés lors de l'analyse. La
          responsabilité du prestataire, si elle était retenue, est plafonnée au montant payé par
          le client pour la prestation concernée.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 9 — Remboursement</h2>
        <p class="mt-2">
          Le paiement n'est pas remboursable une fois le rapport livré. En cas d'impossibilité
          d'accéder au code fournie par le client dans un délai raisonnable, la commande peut
          être annulée et remboursée avant le début effectif de l'analyse.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 10 — Données personnelles</h2>
        <p class="mt-2">
          Les données transmises (email, nom, adresse de facturation) sont utilisées uniquement
          pour la gestion de la commande et la facturation, et ne sont ni vendues ni transmises à
          des tiers hors obligations légales ou comptables. Conformément au RGPD, le client peut
          demander l'accès, la rectification ou la suppression de ses données en écrivant à
          <a :href="mailHref" class="underline underline-offset-2">{{ email }}</a>.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Article 11 — Litiges</h2>
        <p class="mt-2">
          Les présentes CGV sont soumises au droit français. En cas de litige, une solution
          amiable sera recherchée avant toute action judiciaire. À défaut d'accord amiable, les
          tribunaux français compétents seront seuls saisis.
        </p>
      </section>
    </div>
  </section>
</template>
