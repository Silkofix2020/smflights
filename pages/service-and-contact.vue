<template>
  <div class="page-header__wrapper">
    <UContainer>
      <div v-if="showExtraContent" class="page-header__desktop">
        <img src="/img/service-and-contact-left-banner.svg" alt="banner" />
        <div class="page-header__text">
          <h2>We’re here to help</h2>
        </div>
        <img src="/img/service-and-contact-right-banner.svg" alt="banner" />
      </div>
      <div v-else class="page-header__mobile">
        <img src="/img/service-and-contact-mobile-banner.svg" alt="banner" />
        <div class="page-header__text">
          <h2>We’re here to help</h2>
        </div>
      </div>
    </UContainer>
  </div>
  <UContainer>
    <div class="page-body">
      <div class="page-body__left-bar">
        <ul class="left-bar__list">
          <li
            v-for="item in leftBarContent"
            :key="item.slug"
            :class="[
              'left-bar__item',
              { 'left-bar__item-active': selectedItem.slug === item.slug },
            ]"
            @click="selectItem(item)"
          >
            <span class="left-bar__link"
              >{{ item.title }}
              <div class="line"></div
            ></span>
          </li>
        </ul>
      </div>
      <div class="page-body__right-bar">
        <div class="right-bar__wrapper" v-if="selectedItem">
          <div class="right-bar__content" v-html="selectedItem.content"></div>
        </div>
        <div class="right-bar__wrapper" v-else>
          <p>Please select an item from the left bar.</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { ref } from "vue";
import UContainer from "~/components/Container/UContainer.vue";

useHead({
  title: "Service & Contact",
});

const leftBarContent = [
  {
    slug: "contact-support",
    title: "Contact Support",
    content: `
        <div class="right-bar__content-item">
    <h4 class="right-bar__content-title">How to Contact Customer Service</h4>
    <p class="right-bar__content-text">
      The best way to get in touch is by text us on
      <a href="https://wa.me/79935910334" class="right-bar__text-link" target="_blank"
        >WhatsApp</a
      >
      or by emailing
      <a href="mailto:privacy@smflights.com" class="right-bar__text-link"
        >privacy@smflights.com</a
      >
    </p>
  </div>
  <div class="right-bar__content-item">
    <h4 class="right-bar__content-title">Our working hours:</h4>
    <ul>
      <li>Mon-Fri: 8:00 AM ‐ 5:00 PM</li>
      <li>Sat-Sun and National Holidays: closed.</li>
      <li>24/7 E-mail support: privacy@smflights.com</li>
    </ul>
  </div>`,
  },
  {
    slug: "flights",
    title: "Flights",
    content: `<div class="right-bar__content-item">
        <h4 class="right-bar__content-title">
          Changing or Cancelling your flight
        </h4>
        <p class="right-bar__content-text">
          If you need to change or cancel your flight, please contact us
          <a href="https://wa.me/79935910334" class="right-bar__text-link"
            target="_blank">WhatsApp</a
          >
          or email
          <a href="mailto:privacy@smflights.com" class="right-bar__text-link"
            >privacy@smflights.com</a
          >
          with your flight confirmation details.
        </p>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">
          Before making a change or cancellation
        </h4>
        <p class="right-bar__content-text">
          Be sure to review the airline rules and restrictions on your itinerary
          to see what the airline will allow you to do and what fees they will
          charge for flight changes or cancellations.
        </p>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">Basic Economy fares</h4>
        <p class="right-bar__content-text">
          If you've purchased a Basic Economy or Light fare ticket, it's the
          airline's most restrictive non-refundable fare. The airline will not
          allow you to change or cancel your itinerary and will not make
          exceptions.
        </p>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">Seat Selection</h4>
        <p class="right-bar__content-text">
          Advanced seat selection is not available for Basic Economy bookings
          and families are often not able to sit together. Some airlines may
          allow you to select your seats in advance for a fee.
        </p>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">Checked baggage</h4>
        <p class="right-bar__content-text">
          Depending on your itinerary, carry-on baggage may or may not be
          allowed. If carry-on baggage is not allowed, you will be required to
          check your baggage and pay the airline's checked baggage fee.
        </p>
      </div>`,
  },
  {
    slug: "billing-and-payments",
    title: "Billing and Payments",
    content: `<div class="right-bar__content-item">
        <h4 class="right-bar__content-title">Card Declines</h4>
        <p class="right-bar__content-text">
          If your card was declined during booking, it may be due to one of the
          following reasons:
        </p>
        <ul>
          <li>There were insufficient funds available on the card.</li>
          <li>
            Your bank or credit card company flagged the purchase via their own
            security processes and did not allow the transaction to go through.
          </li>
          <li>The airline does not accept the card type.</li>
        </ul>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">
          Why haven't I been charged for my booking?
        </h4>
        <p class="right-bar__content-text">
          In some cases, the charge may not appear on your statement
          immediately. No need for concern! Processing times for your financial
          institution may vary, but the charge should appear within a few days.
        </p>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">
          How can I book a ticket for my baby?
        </h4>
        <p class="right-bar__content-text">
          Children below the age of two should be booked as babies. This means
          that the baby is not allocated its own seat, but must sit on an
          adult’s lap. If your child turns two during your trip, you will need
          to purchase them a seat for the return leg of your trip.
        </p>
      </div>
      <div class="right-bar__content-item">
        <h4 class="right-bar__content-title">
          I was charged but I don't have a confirmed booking
        </h4>
        <p class="right-bar__content-text">
          If you have not received a confirmed ticketed reservation, it's likely
          that our Account Security team needs to verify the cardholder before
          confirming the booking and completing the transaction.
        </p>
      </div>`,
  },
];

const selectedItem = ref(leftBarContent[0]);
const showExtraContent = ref(false);

const updateWidth = () => {
  if (typeof window !== "undefined") {
    showExtraContent.value = window.innerWidth > 900;
  }
};

const selectItem = (item) => {
  selectedItem.value = item;
};

onMounted(() => {
  selectedItem.value = leftBarContent[0];
  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial check
  }
});
</script>

<style lang="scss">
.page {
  &-header {
    width: 100%;

    &__desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }
    &__mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px 0;
    }

    &__wrapper {
      width: 100%;
      background-color: rgba($color: #c2cff0, $alpha: 0.4);
    }
  }
  &-body {
    min-height: calc(100vh - 314px);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 0;

    @media (max-width: 760px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    &__left-bar {
      width: 29%;
      padding: 20px 0;
      border-radius: 5px;
      box-shadow: 0 3px 5px 0px rgba($color: #000000, $alpha: 0.2);
      @media (max-width: 760px) {
        width: 100%;
      }
    }
    &__right-bar {
      width: 59%;
      padding: 20px 0;
      @media (max-width: 760px) {
        width: 100%;
      }
    }
  }
}
.left-bar {
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    @media (max-width: 760px) {
      padding: 5px;
      flex-direction: row;
    }
    @media (max-width: 400px) {
      padding: 5px;
      flex-direction: column;
      align-items: center;
    }
  }
  &__item {
    width: max-content;
    padding: 20px 0;
    cursor: pointer;
    @media (max-width: 400px) {
      padding: 5px;
    }

    &-active {
      font-weight: bold;
    }
  }
}
.right-bar {
  &__content {
    animation: contentBlock 1s ease-in;
    &-item {
      margin-bottom: 20px;
      & ul {
        margin: 5px 0;
      }
    }
    &-title {
      margin-bottom: 5px;
    }
  }
}
.left-bar__item-active .line {
  height: 2px;
  background-color: green;
  animation: underline 0.2s ease-in;
}

@keyframes underline {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
