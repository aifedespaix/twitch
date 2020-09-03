<template>
  <div class="bio">
    <div class="block block-twitch">
      <div class="title">
        <TwitchLogo class="logo" />
        Abonne-toi !
      </div>
      <div class="content">
        <div>
          Tu peux sub à la chaîne, c'est le meilleur moyen de
          <span class="color-main">me soutenir</span> !
        </div>
        <img src="/bio/sub-1.png" alt="sub tiers 1" />
        <div>
          C'est gratuit si tu as un abonnement
          <span class="color-main">Twitch Prime</span> !
        </div>
        <img src="/bio/twitch-prime-logo.png" alt="sub prime" />
        <div>
          Tu gagnes l'accès à des
          <span class="color-main">émotes exclusives</span> !
        </div>
        <div class="emotes">
          <img src="bio/rage.png" alt="" />
          <img src="bio/ez.png" alt="" />
          <img src="bio/fear.png" alt="" />
        </div>
        <div>Tu gagnes également un badge devant ton nom</div>
        <div>Tu passes en priorité sur les chats lents !</div>
        <div>Tu peux visionner les lives sans pub !</div>
        <div>
          Tu peux également sub tier 2 pour 9,99 € et tiers 3 pour 24,99 par
          mois
        </div>
      </div>
    </div>
    <div class="block block-twitter">
      <div class="title">
        <TwitterLogo class="logo" />
        Twitter
      </div>
      <div class="content">
        <div>
          Follow moi sur Twitter <span class="color-main">@aifedesglitch</span>
        </div>
      </div>
    </div>
    <div class="block block-discord">
      <div class="title">
        <DiscordLogo class="logo" />
        Discord
      </div>
      <div class="content">
        <div>Retrouve nous sur <span class="color-main">Discord</span> !</div>
        <div>
          C'est le noyau de la commu : events, fun, concours, tournois, demande
          d'aide, etc...
        </div>
      </div>
    </div>
    <div class="block block-thanks">
      <div class="title"><ThanksLogo class="logo" />Merci</div>
      <div class="content">
        <div>
          Liste des membres piliers, sans qui rien n'aurait pu être possible !
        </div>
        <div>
          <span class="color-main">C'est grâce à vous</span>
          !
        </div>
      </div>
    </div>
    <div class="block block-donations">
      <div class="title">
        <GiftLogo />
        Donations
      </div>
      <div class="content">
        <div>
          Tu peux contribuer à la chaîne grâce à dons ! Que ce soit grâce aux
          <span class="color-main">Bits</span> ou via
          <span class="color-main">Paypal</span>, choisis la façon que tu
          préfères !
        </div>
      </div>
    </div>
    <div class="block block-youtube">
      <div class="title">
        <YoutubeLogo />
        Youtube
      </div>
      <div class="content">
        <div>
          Retrouve moi sur ma chaîne Youtube
          <span class="color-main">aife</span> !
        </div>
        <div>
          Tu y retrouveras des speedruns commentés, des tutos glitch et des
          vidéos plus légères de divertissement !
        </div>
      </div>
    </div>
    <div class="block block-vod">
      <div class="title"><YoutubeLogo />VODs</div>
      <div class="content">
        <div>
          Retrouve TOUS les replays de mes lives sur ma chaîne Youtube
          Secondaire
          <span class="color-main">Aife VOD</span> !
        </div>
        <div>
          Tu y retrouveras des speedruns commentés, des tutos glitch et des
          vidéos plus légères de divertissement !
        </div>
      </div>
    </div>
    <div class="block block-shop">
      <div class="title"><ShopLogo />Shop</div>
      <div class="content">
        <div>
          Si tu veux te la péter avec des vêtements et goodies trop classes,
          rendez-vous sur la <span class="color-main">boutique Aife</span> !
        </div>
      </div>
    </div>
    <div class="block block-cmd">
      <div class="title">
        <CmdLogo />
        Commandes
      </div>
      <div class="content">
        <div>
          Pour retrouver la
          <span class="color-main">liste des commandes</span> utilisables sur le
          chat du stream !
        </div>
        <div>
          <span class="color-main">!cmd</span>
        </div>
      </div>
    </div>
    <div class="block block-contact">
      <div class="title"><ContactLogo />Contact</div>
      <div class="content">
        <div>
          Pour toute demande de contact professionnel, envoyez moi un mail à
          l'adresse
          <span class="color-main">aifedesglitch@gmail.com</span> !
        </div>
      </div>
    </div>
    <div class="block block-planning">
      <div class="title">
        <PlanningLogo />
        Planning
      </div>
      <div class="content">
        <div>Tu veux savoir quand je stream ?</div>
        <div>
          Retrouve le <span class="color-main">Planning de la semaine</span> !
        </div>
      </div>
    </div>
    <div class="block block-instagram">
      <div class="title"><InstagramLogo />Instagram</div>
      <div class="content">
        <div>Retrouve moi sur <span class="color-main">Instagram</span> !</div>
        <div>Je poste régulièrement des screenshots et petites vidéos !</div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitchLogo from "~/assets/twitch.svg?inline"
import TwitterLogo from "~/assets/twitter.svg?inline"
import DiscordLogo from "~/assets/discord.svg?inline"
import ThanksLogo from "~/assets/love.svg?inline"
import GiftLogo from "~/assets/gift.svg?inline"
import YoutubeLogo from "~/assets/youtube.svg?inline"
import ShopLogo from "~/assets/shop.svg?inline"
import CmdLogo from "~/assets/cmd.svg?inline"
import ContactLogo from "~/assets/contact.svg?inline"
import PlanningLogo from "~/assets/planning.svg?inline"
import InstagramLogo from "~/assets/instagram.svg?inline"

export default {
  components: {
    TwitchLogo,
    TwitterLogo,
    DiscordLogo,
    ThanksLogo,
    GiftLogo,
    YoutubeLogo,
    ShopLogo,
    CmdLogo,
    ContactLogo,
    PlanningLogo,
    InstagramLogo,
  },
  link: [
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Poppins:wght@300;900&display=swap",
    },
  ],
  data: () => ({}),
  computed: {},
  methods: {
    go() {},
  },
}
</script>

<style lang="scss">
@mixin block($color) {
  width: 350px;
  border: 5px solid $color;
  font-family: "Poppins", sans-serif;

  .title {
    display: flex;
    background-color: $color;
    font-weight: 900;
    color: darken($color, 40%);
    text-align: center;
    padding: 0.5rem;
    font-size: 2rem !important;
    text-transform: uppercase;
    align-items: center;

    svg {
      width: 80px;
      height: 50px;
      fill: darken($color, 40%);
    }
  }
  .content {
    color: #fafafa;
    font-weight: 300;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    box-shadow: inset -180px 0 120px darken($color, 40%),
      inset 180px 0 120px darken($color, 40%);
    img {
      object-fit: contain;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      max-height: 80px !important;
    }
    .emotes {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  }
  .color-main {
    color: $color;
    font-weight: bold;
  }
}
.bio {
  display: grid;
  grid-gap: 1rem;
}
.block {
  &-twitch {
    @include block(#9147ff);
  }
  &-twitter {
    @include block(#1da1f2);
  }
  &-youtube {
    @include block(#ff0000);
  }
  &-discord {
    @include block(#7289da);
  }
  &-thanks {
    @include block(#ec407a);
  }
  &-donations {
    @include block(#ff6f00);
  }
  &-vod {
    @include block(#0277bd);
  }
  &-shop {
    @include block(#00bfa5);
  }
  &-cmd {
    @include block(#00c853);
  }
  &-contact {
    @include block(#7e7e7e);
  }
  &-planning {
    @include block(#ffea00);
  }
  &-instagram {
    @include block(#be6060);
    .title {
      background-color: transparent;
    }
    .content {
      background-color: transparent;
    }
    border: none;
    padding: 5px;
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
}
</style>
