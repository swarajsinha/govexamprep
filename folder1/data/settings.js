/* ============================================================
   SETTINGS — simple switches for the website owner
   Only change the text between the quotes "  ".
   After any change: save, then upload the website folder
   to Cloudflare again (see the guide).
   ============================================================

   1) VISITOR COUNTER (free, students do not need to log in)
      Write your GoatCounter code, for example: "govexamprep"
      Guide: step 6.

   2) FEEDBACK
      feedbackEmail:    feedback and star ratings from the Feedback page
                        come to this email.
      feedbackFormLink: (optional) a Google Form link, for example
                        "https://forms.gle/AbCdEf123". If you add it,
                        the Feedback page also shows a button for the form.
      Guide: step 5.

   3) TAGLINE (the motivating line under the name on the home page)
      Write it in English and Hindi. Leave both "" to hide it.

   4) SUPPORT THIS PROJECT (voluntary UPI contribution)
      upiId:      write your UPI ID, for example "yourname@okicici"
      upiName:    the name shown in the student's UPI app
      upiQrImage: put your UPI QR picture in the "assets" folder and
                  write its name here, for example "assets/upi-qr.png".
                  Leave "" to show an empty QR box.
      showSupportSection: true = show the section, false = hide it.
   ============================================================ */
window.SETTINGS = {
  goatcounterCode: "",
  showVisitorCount: true,
  feedbackEmail: "govexamprep37@gmail.com",
  feedbackFormLink: "",
  taglineEn: "Where Preparation Takes Flight",
  taglineHi: "जहाँ तैयारी भरती है उड़ान",
  showSupportSection: false,
  upiId: "YOUR_UPI_ID_HERE",
  upiName: "Govexamprep",
  upiQrImage: "",

  /* ===== Google AdSense (विज्ञापन) =====
     AdSense मंज़ूरी मिलने के बाद ही भरें।
     adsenseClient : "ca-pub-" से शुरू होने वाला Publisher ID (जैसे "ca-pub-1234567890123456")
     adsenseSlot   : AdSense में बनाए गए Display ad unit का नंबर (जैसे "1234567890")
     adsInApp      : true = Android ऐप में सबसे नीचे छोटा विज्ञापन दिखेगा
     adsOnWebsite  : false = वेबसाइट पर विज्ञापन नहीं (true करने पर वेबसाइट पर भी दिखेगा)
     दोनों ID खाली रहें तो कहीं भी विज्ञापन नहीं दिखेगा। */
  adsenseClient: "",
  adsenseSlot: "",
  adsInApp: true,
  adsOnWebsite: false,

  /* ===== Android ऐप (PrepFlight) =====
     ऐप Play Store पर आने के बाद उसका पूरा लिंक यहाँ डालें, जैसे:
     "https://play.google.com/store/apps/details?id=com.infinitydigital.prepflight"
     खाली रहे तो वेबसाइट पर "जल्द ही Google Play पर" लिखा दिखेगा। */
  playStoreUrl: "",

  /* ===== Google / Bing में वेबसाइट जोड़ना (Search Console) =====
     Search Console → "HTML tag" तरीका चुनें। वहाँ ऐसा कोड मिलेगा:
       <meta name="google-site-verification" content="AbC123xyz..." />
     उसमें से सिर्फ़ content="..." के अंदर वाला हिस्सा यहाँ डालें।
     Bing Webmaster Tools का कोड (msvalidate.01) भी इसी तरह bingVerification में।
     भरने के बाद मुझसे वेबसाइट दोबारा बनवाएँ। */
  googleVerification: "",
  bingVerification: ""
};
