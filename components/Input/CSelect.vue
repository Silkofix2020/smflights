<template>
  <div class="custom-select-wrapper">
    <div class="custom-select">
      <div class="selected-option" @click="toggleDropdown">
        <span
          v-if="selectedCountry"
          :class="`fi fi-${selectedCountry.code.toLowerCase()}`"
        ></span
        ><span>
          {{ selectedCountry ? selectedCountry.phoneCode : "Phone code" }}</span
        >
      </div>
      <div v-if="dropdownOpen" class="options">
        <div
          v-for="country in countries"
          :key="country.code"
          class="option"
          @click="selectCountry(country)"
        >
          <span :class="`fi fi-${country.code.toLowerCase()}`"></span>
          {{ country.name }} ({{ country.phoneCode }})
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedCountry = ref(null);
const dropdownOpen = ref(false);

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectCountry = (country) => {
  selectedCountry.value = country;
  dropdownOpen.value = false;
  emit("update:modelValue", country.phoneCode);
};

const countries = ref([
  { name: "United States", code: "us", phoneCode: "+1" },
  { name: "Mexico", code: "mx", phoneCode: "+52" },
  { name: "Afghanistan", code: "af", phoneCode: "+93" },
  { name: "Albania", code: "al", phoneCode: "+355" },
  { name: "Algeria", code: "dz", phoneCode: "+213" },
  { name: "American Samoa", code: "as", phoneCode: "+1-684" },
  { name: "Andorra", code: "ad", phoneCode: "+376" },
  { name: "Angola", code: "ao", phoneCode: "+244" },
  { name: "Argentina", code: "ar", phoneCode: "+54" },
  { name: "Armenia", code: "am", phoneCode: "+374" },
  { name: "Australia", code: "au", phoneCode: "+61" },
  { name: "Austria", code: "at", phoneCode: "+43" },
  { name: "Azerbaijan", code: "az", phoneCode: "+994" },
  { name: "Bahamas", code: "bs", phoneCode: "+1-242" },
  { name: "Bahrain", code: "bh", phoneCode: "+973" },
  { name: "Bangladesh", code: "bd", phoneCode: "+880" },
  { name: "Barbados", code: "bb", phoneCode: "+1-246" },
  { name: "Belarus", code: "by", phoneCode: "+375" },
  { name: "Belgium", code: "be", phoneCode: "+32" },
  { name: "Belize", code: "bz", phoneCode: "+501" },
  { name: "Benin", code: "bj", phoneCode: "+229" },
  { name: "Bhutan", code: "bt", phoneCode: "+975" },
  { name: "Bolivia", code: "bo", phoneCode: "+591" },
  { name: "Bosnia and Herzegovina", code: "ba", phoneCode: "+387" },
  { name: "Botswana", code: "bw", phoneCode: "+267" },
  { name: "Brazil", code: "br", phoneCode: "+55" },
  { name: "Brunei", code: "bn", phoneCode: "+673" },
  { name: "Bulgaria", code: "bg", phoneCode: "+359" },
  { name: "Burkina Faso", code: "bf", phoneCode: "+226" },
  { name: "Burundi", code: "bi", phoneCode: "+257" },
  { name: "Cambodia", code: "kh", phoneCode: "+855" },
  { name: "Cameroon", code: "cm", phoneCode: "+237" },
  { name: "Canada", code: "ca", phoneCode: "+1" },
  { name: "Cape Verde", code: "cv", phoneCode: "+238" },
  { name: "Central African Republic", code: "cf", phoneCode: "+236" },
  { name: "Chad", code: "td", phoneCode: "+235" },
  { name: "Chile", code: "cl", phoneCode: "+56" },
  { name: "China", code: "cn", phoneCode: "+86" },
  { name: "Colombia", code: "co", phoneCode: "+57" },
  { name: "Comoros", code: "km", phoneCode: "+269" },
  { name: "Congo", code: "cg", phoneCode: "+242" },
  { name: "Costa Rica", code: "cr", phoneCode: "+506" },
  { name: "Croatia", code: "hr", phoneCode: "+385" },
  { name: "Cuba", code: "cu", phoneCode: "+53" },
  { name: "Cyprus", code: "cy", phoneCode: "+357" },
  { name: "Czech Republic", code: "cz", phoneCode: "+420" },
  { name: "Denmark", code: "dk", phoneCode: "+45" },
  { name: "Djibouti", code: "dj", phoneCode: "+253" },
  { name: "Dominica", code: "dm", phoneCode: "+1-767" },
  { name: "Dominican Republic", code: "do", phoneCode: "+1-809" },
  { name: "East Timor", code: "tl", phoneCode: "+670" },
  { name: "Ecuador", code: "ec", phoneCode: "+593" },
  { name: "Egypt", code: "eg", phoneCode: "+20" },
  { name: "El Salvador", code: "sv", phoneCode: "+503" },
  { name: "Equatorial Guinea", code: "gq", phoneCode: "+240" },
  { name: "Eritrea", code: "er", phoneCode: "+291" },
  { name: "Estonia", code: "ee", phoneCode: "+372" },
  { name: "Eswatini", code: "sz", phoneCode: "+268" },
  { name: "Ethiopia", code: "et", phoneCode: "+251" },
  { name: "Fiji", code: "fj", phoneCode: "+679" },
  { name: "Finland", code: "fi", phoneCode: "+358" },
  { name: "France", code: "fr", phoneCode: "+33" },
  { name: "Gabon", code: "ga", phoneCode: "+241" },
  { name: "Gambia", code: "gm", phoneCode: "+220" },
  { name: "Georgia", code: "ge", phoneCode: "+995" },
  { name: "Germany", code: "de", phoneCode: "+49" },
  { name: "Ghana", code: "gh", phoneCode: "+233" },
  { name: "Greece", code: "gr", phoneCode: "+30" },
  { name: "Grenada", code: "gd", phoneCode: "+1-473" },
  { name: "Guatemala", code: "gt", phoneCode: "+502" },
  { name: "Guinea", code: "gn", phoneCode: "+224" },
  { name: "Guinea-Bissau", code: "gw", phoneCode: "+245" },
  { name: "Guyana", code: "gy", phoneCode: "+592" },
  { name: "Haiti", code: "ht", phoneCode: "+509" },
  { name: "Honduras", code: "hn", phoneCode: "+504" },
  { name: "Hungary", code: "hu", phoneCode: "+36" },
  { name: "Iceland", code: "is", phoneCode: "+354" },
  { name: "India", code: "in", phoneCode: "+91" },
  { name: "Indonesia", code: "id", phoneCode: "+62" },
  { name: "Iran", code: "ir", phoneCode: "+98" },
  { name: "Iraq", code: "iq", phoneCode: "+964" },
  { name: "Ireland", code: "ie", phoneCode: "+353" },
  { name: "Israel", code: "il", phoneCode: "+972" },
  { name: "Italy", code: "it", phoneCode: "+39" },
  { name: "Jamaica", code: "jm", phoneCode: "+1-876" },
  { name: "Japan", code: "jp", phoneCode: "+81" },
  { name: "Jordan", code: "jo", phoneCode: "+962" },
  { name: "Kazakhstan", code: "kz", phoneCode: "+7" },
  { name: "Kenya", code: "ke", phoneCode: "+254" },
  { name: "Kiribati", code: "ki", phoneCode: "+686" },
  { name: "North Korea", code: "kp", phoneCode: "+850" },
  { name: "South Korea", code: "kr", phoneCode: "+82" },
  { name: "Kuwait", code: "kw", phoneCode: "+965" },
  { name: "Kyrgyzstan", code: "kg", phoneCode: "+996" },
  { name: "Laos", code: "la", phoneCode: "+856" },
  { name: "Latvia", code: "lv", phoneCode: "+371" },
  { name: "Lebanon", code: "lb", phoneCode: "+961" },
  { name: "Lesotho", code: "ls", phoneCode: "+266" },
  { name: "Liberia", code: "lr", phoneCode: "+231" },
  { name: "Libya", code: "ly", phoneCode: "+218" },
  { name: "Liechtenstein", code: "li", phoneCode: "+423" },
  { name: "Lithuania", code: "lt", phoneCode: "+370" },
  { name: "Luxembourg", code: "lu", phoneCode: "+352" },
  { name: "Macau", code: "mo", phoneCode: "+853" },
  { name: "Madagascar", code: "mg", phoneCode: "+261" },
  { name: "Malawi", code: "mw", phoneCode: "+265" },
  { name: "Malaysia", code: "my", phoneCode: "+60" },
  { name: "Maldives", code: "mv", phoneCode: "+960" },
  { name: "Mali", code: "ml", phoneCode: "+223" },
  { name: "Malta", code: "mt", phoneCode: "+356" },
  { name: "Marshall Islands", code: "mh", phoneCode: "+692" },
  { name: "Martinique", code: "mq", phoneCode: "+596" },
  { name: "Mauritania", code: "mr", phoneCode: "+222" },
  { name: "Mauritius", code: "mu", phoneCode: "+230" },
  { name: "Mayotte", code: "yt", phoneCode: "+262" },
  { name: "Micronesia", code: "fm", phoneCode: "+691" },
  { name: "Moldova", code: "md", phoneCode: "+373" },
  { name: "Monaco", code: "mc", phoneCode: "+377" },
  { name: "Mongolia", code: "mn", phoneCode: "+976" },
  { name: "Montenegro", code: "me", phoneCode: "+382" },
  { name: "Montserrat", code: "ms", phoneCode: "+1-664" },
  { name: "Morocco", code: "ma", phoneCode: "+212" },
  { name: "Mozambique", code: "mz", phoneCode: "+258" },
  { name: "Myanmar", code: "mm", phoneCode: "+95" },
  { name: "Namibia", code: "na", phoneCode: "+264" },
  { name: "Nauru", code: "nr", phoneCode: "+674" },
  { name: "Nepal", code: "np", phoneCode: "+977" },
  { name: "Netherlands", code: "nl", phoneCode: "+31" },
  { name: "New Caledonia", code: "nc", phoneCode: "+687" },
  { name: "New Zealand", code: "nz", phoneCode: "+64" },
  { name: "Nicaragua", code: "ni", phoneCode: "+505" },
  { name: "Niger", code: "ne", phoneCode: "+227" },
  { name: "Nigeria", code: "ng", phoneCode: "+234" },
  { name: "Niue", code: "nu", phoneCode: "+683" },
  { name: "Norfolk Island", code: "nf", phoneCode: "+672" },
  { name: "North Macedonia", code: "mk", phoneCode: "+389" },
  { name: "Northern Mariana Islands", code: "mp", phoneCode: "+1-670" },
  { name: "Norway", code: "no", phoneCode: "+47" },
  { name: "Oman", code: "om", phoneCode: "+968" },
  { name: "Pakistan", code: "pk", phoneCode: "+92" },
  { name: "Palau", code: "pw", phoneCode: "+680" },
  { name: "Palestine", code: "ps", phoneCode: "+970" },
  { name: "Panama", code: "pa", phoneCode: "+507" },
  { name: "Papua New Guinea", code: "pg", phoneCode: "+675" },
  { name: "Paraguay", code: "py", phoneCode: "+595" },
  { name: "Peru", code: "pe", phoneCode: "+51" },
  { name: "Philippines", code: "ph", phoneCode: "+63" },
  { name: "Poland", code: "pl", phoneCode: "+48" },
  { name: "Portugal", code: "pt", phoneCode: "+351" },
  { name: "Puerto Rico", code: "pr", phoneCode: "+1" },
  { name: "Qatar", code: "qa", phoneCode: "+974" },
  { name: "Réunion", code: "re", phoneCode: "+262" },
  { name: "Romania", code: "ro", phoneCode: "+40" },
  { name: "Russia", code: "ru", phoneCode: "+7" },
  { name: "Rwanda", code: "rw", phoneCode: "+250" },
  { name: "Saint Barthélemy", code: "bl", phoneCode: "+590" },
  { name: "Saint Helena", code: "sh", phoneCode: "+290" },
  { name: "Saint Kitts and Nevis", code: "kn", phoneCode: "+1-869" },
  { name: "Saint Lucia", code: "lc", phoneCode: "+1-758" },
  { name: "Saint Martin", code: "mf", phoneCode: "+590" },
  { name: "Saint Pierre and Miquelon", code: "pm", phoneCode: "+508" },
  { name: "Saint Vincent and the Grenadines", code: "vc", phoneCode: "+1-784" },
  { name: "Samoa", code: "ws", phoneCode: "+685" },
  { name: "San Marino", code: "sm", phoneCode: "+378" },
  { name: "São Tomé and Príncipe", code: "st", phoneCode: "+239" },
  { name: "Saudi Arabia", code: "sa", phoneCode: "+966" },
  { name: "Senegal", code: "sn", phoneCode: "+221" },
  { name: "Serbia", code: "rs", phoneCode: "+381" },
  { name: "Seychelles", code: "sc", phoneCode: "+248" },
  { name: "Sierra Leone", code: "sl", phoneCode: "+232" },
  { name: "Singapore", code: "sg", phoneCode: "+65" },
  { name: "Sint Maarten", code: "sx", phoneCode: "+1-721" },
  { name: "Slovakia", code: "sk", phoneCode: "+421" },
  { name: "Slovenia", code: "si", phoneCode: "+386" },
  { name: "Solomon Islands", code: "sb", phoneCode: "+677" },
  { name: "Somalia", code: "so", phoneCode: "+252" },
  { name: "South Africa", code: "za", phoneCode: "+27" },
  { name: "South Korea", code: "kr", phoneCode: "+82" },
  { name: "South Sudan", code: "ss", phoneCode: "+211" },
  { name: "Spain", code: "es", phoneCode: "+34" },
  { name: "Sri Lanka", code: "lk", phoneCode: "+94" },
  { name: "Sudan", code: "sd", phoneCode: "+249" },
  { name: "Suriname", code: "sr", phoneCode: "+597" },
  { name: "Swaziland", code: "sz", phoneCode: "+268" },
  { name: "Sweden", code: "se", phoneCode: "+46" },
  { name: "Switzerland", code: "ch", phoneCode: "+41" },
  { name: "Syria", code: "sy", phoneCode: "+963" },
  { name: "Taiwan", code: "tw", phoneCode: "+886" },
  { name: "Tajikistan", code: "tj", phoneCode: "+992" },
  { name: "Tanzania", code: "tz", phoneCode: "+255" },
  { name: "Thailand", code: "th", phoneCode: "+66" },
  { name: "Togo", code: "tg", phoneCode: "+228" },
  { name: "Tokelau", code: "tk", phoneCode: "+690" },
  { name: "Tonga", code: "to", phoneCode: "+676" },
  { name: "Trinidad and Tobago", code: "tt", phoneCode: "+1-868" },
  { name: "Tunisia", code: "tn", phoneCode: "+216" },
  { name: "Turkey", code: "tr", phoneCode: "+90" },
  { name: "Turkmenistan", code: "tm", phoneCode: "+993" },
  { name: "Tuvalu", code: "tv", phoneCode: "+688" },
  { name: "Uganda", code: "ug", phoneCode: "+256" },
  { name: "Ukraine", code: "ua", phoneCode: "+380" },
  { name: "United Arab Emirates", code: "ae", phoneCode: "+971" },
  { name: "United Kingdom", code: "gb", phoneCode: "+44" },
  { name: "Uruguay", code: "uy", phoneCode: "+598" },
  { name: "Uzbekistan", code: "uz", phoneCode: "+998" },
  { name: "Vanuatu", code: "vu", phoneCode: "+678" },
  { name: "Vatican City", code: "va", phoneCode: "+379" },
  { name: "Venezuela", code: "ve", phoneCode: "+58" },
  { name: "Vietnam", code: "vn", phoneCode: "+84" },
  { name: "Wallis and Futuna", code: "wf", phoneCode: "+681" },
  { name: "Western Sahara", code: "eh", phoneCode: "+212" },
  { name: "Yemen", code: "ye", phoneCode: "+967" },
  { name: "Zambia", code: "zm", phoneCode: "+260" },
  { name: "Zimbabwe", code: "zw", phoneCode: "+263" },
]);
</script>

<style scoped>
@import "flag-icons/css/flag-icons.min.css";

.custom-select-wrapper {
  position: relative;
  width: 100px;
  cursor: pointer;
  user-select: none;
}

.custom-select {
  font-size: 14px;
  padding: 1px 0 2px 10px;
  border: 0.03125em solid #b9b9b9;
  border-radius: 5px;
  &:focus {
    outline-color: #feb47b;
  }
}

.selected-option {
  display: flex;
  align-items: center;
}
.selected-option span {
  margin-right: 10px;
  padding: 8px 0;
  font-size: 12px;
  color: #616161;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
}

.option {
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
}

.option:hover {
  background-color: #f0f0f0;
}

.option span {
  margin-right: 10px;
}
</style>
