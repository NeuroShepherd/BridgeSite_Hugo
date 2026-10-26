# BRIDGE Gather policy edits

Oct 8, 2026 · @Shane

The privacy policy and terms on bridge.ucsf.edu are a solid base, but several statements don't match how Gather works today, and the home page lacks what Google's branding check looks for. Fix the must-fix items first; bracketed text marks facts the team must confirm before publishing.

## Fix first

These 14 items are either untrue for Gather today or something Google's review checks. Items 1–2 alone explain the failed branding check.

| # | Where | Problem | Fix | Status |
| --- | --- | --- | --- | --- |
| 1 | Home page | Never mentions "BRIDGE Gather", the name on Google's consent screen | Add the BRIDGE Gather block (Home page section) |  |
| 2 | Home page footer | No links to the Privacy Policy or Terms; Google requires both | Add the footer links (Home page section) |  |
| 3 | Privacy §1, Terms §1 | Pages say "GATHER"; Google and participants' Google Accounts show "BRIDGE Gather" | Introduce it as BRIDGE Gather ("GATHER") |  |
| 4 | Privacy §3.1 | Lists SpO₂, temperature, location, workouts and more; Gather reads none of these | Replace with the actual list per Google permission |  |
| 5 | Privacy §3.2 | Says Google sends "basic profile information"; Gather requests no profile or email access | Replace §3.2 |  |
| 6 | Privacy §4, §9 | Names the Fitbit Web API; Gather uses only the Google Health API | Replace both mentions |  |
| 7 | Privacy §7 | Claims encryption at rest, role-based access and audit logging; Gather itself has none of these | Keep only what UCSF IT confirms |  |
| 8 | Privacy §9 | Merger transfers "with notice" (Google requires explicit consent); no Google Health API policies named | Replace §9 |  |
| 9 | Privacy §13 | Says to revoke on fitbit.com; the grant is in the Google Account | Google Account → Linked apps → BRIDGE Gather |  |
| 10 | Privacy §1–§4, §10, §13; Terms §2, §4, §6 | Oura and Garmin: no code for them anywhere in Gather's history | Remove, or name the system that collects them |  |
| 11 | Privacy §2, §3.1; Terms §4 | "Study-assigned device": Gather reads the whole Google account, from any device or app syncing to it | Reword (Privacy section) |  |
| 12 | Privacy §6, §3.3 | Google Health API bars PHI use without Google's written approval or an IRB-reviewed HIPAA authorization | Ask the UCSF Privacy Office; reword §6 |  |
| 13 | Terms §12 | Limits liability for "participation in the Study"; research rules bar waiving participants' rights (45 CFR 46.116(a)(6)) | Limit it to the software |  |
| 14 | Gather app | No disclosure screen before Google's permission screen; the Health API requires one in the app | Code change (Gather code section) |  |

## Home page (bridge.ucsf.edu)

Add a BRIDGE Gather section and footer links; this clears Google's name-mismatch error without renaming the app. Put the text in the page's HTML itself, not in an image or added by JavaScript, and spell "BRIDGE Gather" exactly as on the consent screen.

**1. New section, after the six feature cards**:

```html
<section id="bridge-gather">
  <h2>BRIDGE Gather</h2>
  <p>BRIDGE Gather is the wearable-data app of the UCSF BRIDGE research program, run by the UCSF Weill Institute for Neurosciences. It is used only by participants enrolled in an IRB-approved BRIDGE research study and by the study team.</p>
  <p><strong>What it does.</strong> When a participant signs in with Google and approves access, BRIDGE Gather uses the Google Health API to read, and never change, their activity, heart-rate and sleep data: steps and heart rate minute by minute, resting heart rate, heart-rate variability, Active Zone Minutes, and sleep sessions and stages. If the participant allows it, it also reads the time zone in their Google Health settings, so each day's data matches their own calendar day.</p>
  <p><strong>Why it needs this data.</strong> BRIDGE Gather stores the data on UCSF servers. The study team uses it for the approved research, and the participant's UCSF clinicians see activity, heart-rate and sleep trends in the BRIDGE dashboard, including during clinic visits.</p>
  <p>We never sell this data or use it for advertising. Participants can disconnect at any time in their Google Account under Linked apps, or by emailing <a href="mailto:bridge@ucsf.edu">bridge@ucsf.edu</a>.</p>
  <p><a href="https://bridge.ucsf.edu/privacy-policy/">BRIDGE Gather Privacy Policy</a> · <a href="https://bridge.ucsf.edu/terms-of-service/">Terms of Service</a></p>
</section>
```

**2. Footer on every page.** The URLs must match the consent screen character for character, trailing slash included:

```html
<p class="footer__legal"><a href="https://bridge.ucsf.edu/privacy-policy/">Privacy Policy</a> · <a href="https://bridge.ucsf.edu/terms-of-service/">Terms of Service</a></p>
```

**3. Smaller fixes**

- Replace the placeholder meta description "BRIDGE Description" on all three pages, and the home page's og:description and twitter:description, with one real sentence, e.g. "BRIDGE brings UCSF patients' research and wearable data to the point of care."
- Optional: the "Real-time" card says BRIDGE pulls wearable data live. Gather adds a day's data only after that day ends, every 3 hours. Suggested: "BRIDGE pulls from multiple data sources, from the medical record to research, patient-facing and wearable platforms. Wearable data collected by BRIDGE Gather is added after each day ends."
- Change the email in the new section if the team picks selfieapp@ucsf.edu (Questions for the team, Q4).

## Privacy policy (bridge.ucsf.edu/privacy-policy/)

Paste each quoted block over the section named. Sections not listed (5, 8, 10, 15) can stay, apart from removing Oura and Garmin if the team confirms they aren't collected (tracker item 10).

**§1 Introduction — replace the GATHER bullet**

> BRIDGE Gather (“GATHER”) — the data-collection application that connects to your Google account, retrieves your data through the Google Health API, and stores it on UCSF internal servers. Google’s sign-in and permission screens, and the Linked apps list in your Google Account, show it as “BRIDGE Gather”; and

**§1 — replace “This Policy applies specifically to data that GATHER accesses through third-party wearable platforms …”**

> This Policy applies specifically to data that GATHER retrieves from participants’ Google accounts through the Google Health API, and that BRIDGE displays to the care team, on behalf of participants who have enrolled in the Study and provided informed consent. \[Only if another system collects Oura or Garmin data: “It also covers Oura and Garmin data collected by \<system name>, as described in Section 10.”\]

**§2 — replace “participants are provided with a wearable device … so that GATHER can collect health and activity data”** (pick the true version)

> As part of the Study, you are given a wearable device \[or: you may be given a wearable device or asked to use one you already have\]. You sign in to the Google account your device syncs to and allow GATHER to read your data.

**§3.1 Wearable device data — replace the whole section**

> With your permission, GATHER collects the health and activity data stored in the Google account you connect, for each day from your Study start date to your Study end date. GATHER reads the account, not one particular device, so if other devices or apps also send data to that account, their data for those days may be collected too.
>
> Google asks you to let BRIDGE Gather see, read-only, the categories below. GATHER uses and keeps only the items listed, even where a Google permission covers more:
>
> - **Activity and fitness:** your steps for each minute and your daily Active Zone Minutes.
> - **Health metrics and measurements:** your average heart rate for each minute, your daily resting heart rate, and your daily heart-rate variability (RMSSD).
> - **Sleep:** each sleep session, including naps, with its start and end times and time-zone offset; its sleep stages (awake, light, deep and REM, or asleep, restless and awake when stages are not available); its sleep efficiency; and whether it was your main sleep of the night.
> - **Settings (optional):** the time zone in your Google Health settings, used only to divide your data into your own calendar days. If you decline, GATHER uses the time zone the study team recorded for you, or the Study’s default.
>
> From this data GATHER calculates daily summaries: total steps, lowest and highest heart rate, hours asleep, and minutes the device was worn during the day (6 a.m. to 10 p.m.) and at night. GATHER cannot change or delete anything in your Google account.

&#91;Team: if a start date can be set before the consent date, add: “This can include days before you enrolled, back to the start date set by the study team.”\]

**§3.2 Account and authorization data — replace**

> When you connect, you sign in to Google and choose which permissions to give BRIDGE Gather. Google then gives GATHER an access token, a refresh token and the token’s expiry time. GATHER stores these in the Study database on UCSF servers so it can keep retrieving your data until access is revoked. GATHER does not request your name, email address or Google profile from Google, and it never receives your Google password.

**§3.3 — replace “Where permitted and relevant to your care, Study data may be associated with clinical information in UCSF systems.”** Also drop “the device assigned to you” unless another system records it; Gather doesn’t.

> If you are a UCSF patient, BRIDGE may show your wearable data next to information from your UCSF medical record so your care team can review them together.

**§4 Sources of Data — replace the Fitbit line**

> Google — through the Google Health API (read-only), which provides the data your wearable uploads to your Google account through the Google Health app (formerly the Fitbit app).

&#91;If the Study still holds data collected earlier through the Fitbit Web API, add: “Data collected before \<date> was retrieved through the Fitbit Web API, which Google is retiring.”\]

**§6 — rename to “Why We May Use Your Data” and replace the body** (confirm with the UCSF Privacy Office first; tracker item 12)

> We collect and use your wearable data because you agreed to it in your IRB-approved informed consent form \[if true: and in your signed authorization to use your health information for research (your HIPAA authorization)\], and because you approved access on Google’s permission screen. UCSF is a covered entity under the federal Health Insurance Portability and Accountability Act (HIPAA). When your wearable data is combined with your UCSF medical information, we protect it as HIPAA requires. Your consent form \[and HIPAA authorization\] describe our data practices, the risks, and your rights; if they differ from this Policy, they control.

**§7 How We Store and Protect Your Data — replace the bullet list** (keep each bracketed claim only if UCSF IT confirms it)

> - Encryption of data in transit between GATHER and Google (HTTPS)\[, and encryption at rest of the Study database\];
> - Access to GATHER and BRIDGE limited to authorized Study personnel through \[the UCSF network or VPN / UCSF sign-in\];
> - &#91;Logging of who accessed GATHER and BRIDGE, kept and reviewed under UCSF policy;\]
> - Access and refresh tokens kept only in the Study database on UCSF servers and out of GATHER’s application logs; when the study team disconnects you or removes you from GATHER, GATHER asks Google to revoke them; and
> - Institutional network, firewall, and endpoint protections.

**§7 — add after the list**

> Study staff can export a participant’s data from GATHER as files for analysis; these files are kept only in \[UCSF-approved locations\]. BRIDGE reads the data from GATHER to display it \[and does / does not keep its own copy\].

**§9 — rename to “Google Health API — Limited Use Disclosure” and replace the section**

> The use and transfer to any other app of information received from Google APIs, including the Google Health API, by BRIDGE Gather (called GATHER in this Policy) and by BRIDGE will adhere to the Google API Services User Data Policy, the Google Health API Developer and User Data Policy, and the Google Health API User Data and Health Research Policy, including the Limited Use requirements. These commitments cover the data we receive from Google and any data aggregated, anonymized, de-identified, or derived from it. Specifically:
>
> - We request only the read-only Google Health permissions listed in Section 3.1. We never change your Google data.
> - We use your Google Health data only for this Study, as described in Section 5 and in your informed consent form. We do not use or share it for any other research study or purpose unless you give separate informed consent or the UCSF IRB waives that requirement.
> - We transfer your Google Health data to others only (a) with your consent, to provide the Study features described in this Policy, such as showing it to your UCSF clinicians in BRIDGE; (b) for security purposes, such as investigating abuse; or (c) to comply with applicable law.
> - We do not sell your Google Health data, and we do not transfer it to advertising platforms, data brokers, or other information resellers, even in aggregated or anonymized form.
> - We do not use or transfer your Google Health data to serve advertisements, or to determine credit-worthiness or for lending purposes.
> - People may read your individual Google Health data only (a) with your consent: by signing the Study’s informed consent form, you agree that authorized Study investigators, research staff, and your UCSF clinicians may view your individual data in GATHER and BRIDGE for the purposes of the Study; (b) when necessary for security purposes, such as investigating abuse; (c) to comply with applicable law; or (d) when the data has been aggregated and anonymized and is used for internal operations.

Link each policy name to its page (Sources). \[Team: confirm the consent form says what the last bullet says, and name any vendor that receives the data in the transfer bullet and in §8.\]

**§11 Data Retention — replace the first sentence**

> GATHER retrieves data only for the days between your Study start and end dates. We keep your wearable data, and the daily summaries calculated from it, on UCSF servers while you take part and then for \[retention period from the protocol, e.g. “N years after the Study ends”\].

**§12 Your Choices and Rights — replace the first and third bullets**

> - Withdraw from the Study at any time by contacting the study team. The team then disconnects GATHER from your Google account, which stops future data collection.
> - Disconnect: at your request, the study team revokes GATHER’s access to your Google account. Data already collected is kept and handled as described in Section 11.
> - Deletion: at your request, the study team removes you from GATHER, which revokes its access to your Google account and permanently deletes the wearable data GATHER stored for you. \[Team: say what happens to exported copies, data shown in BRIDGE, and backups.\] Some data already used in analyses or required for research integrity may not be able to be deleted.

**§13 How to Disconnect — replace the lead-in and the Fitbit bullet**

> You can revoke GATHER’s access to your wearable data at any time. In your Google Account, GATHER is listed as “BRIDGE Gather”:
>
> - **Google (Fitbit and other devices that sync to your Google account):** in your Google Account, open **Linked apps** (myaccount.google.com/connections), select **BRIDGE Gather**, and choose **Delete all connections**. This stops new collection; it does not delete data GATHER has already collected (see Sections 11–12).

Keep the Oura and Garmin bullets only if those connections exist (tracker item 10).

**§14 Children’s Privacy — replace with the true variant**

> Adults only: The Study enrolls only adults 18 and older. GATHER and BRIDGE are not intended for children, and we do not knowingly collect data from anyone under 18. If you believe a child’s account has been connected, email us and we will disconnect it and delete the data.

> Minors may enroll: Some participants may be under 18. A child can take part only with a parent’s or legal guardian’s permission and the child’s agreement, as approved by the IRB, and a parent or guardian helps connect the child’s account. A parent or guardian can ask us at any time to stop collecting, or to delete, a child’s data.

**§16 Contact Us — replace the IRB line** (also in Terms §16)

> If you have questions about your rights as a research participant, or concerns you would like to raise with someone other than the study team, contact the UCSF Human Research Protection Program (HRPP), which oversees the UCSF Institutional Review Board (IRB): call 415-476-1814 (Monday–Friday, 8 a.m.–5 p.m., except UCSF holidays) or visit irb.ucsf.edu/contact-us. Please mention the IRB number on your consent form.

## Terms of service (bridge.ucsf.edu/terms-of-service/)

The biggest change is §12: as written it limits liability for taking part in the Study, which research rules don't allow. The terms should cover only the software and leave participation to the consent form.

**§1 Acceptance — replace the first sentence and the two acceptance sentences** (keep the BRIDGE/GATHER description between them, using “BRIDGE Gather (“GATHER”)” as in Privacy §1)

> These Terms of Service (“Terms”) set the rules for using the BRIDGE and BRIDGE Gather (“GATHER”) applications, operated by the University of California, San Francisco (“UCSF,” “we,” “us,” or “our”). Your participation in the research study (the “Study”) is governed by your IRB-approved informed consent form, not by these Terms. These Terms do not change what you agreed to in your consent form and do not take away any of your rights. If you have questions about them, ask the study team before you connect your account.

**§2 and §4 — devices and platforms.** Remove Oura and Garmin unless another system collects them (tracker item 10). If participants may use their own device, reword §4 so the device rules apply only to Study-issued devices: “If the Study gives you a device, …”

**§5 Device Connection — add after the first sentence**

> Google’s permission screen will show the app as “BRIDGE Gather” and ask for read-only access to your activity and fitness, health metrics, and sleep data, and optionally your time-zone setting. \[Until Google completes its review of the app, Google first shows a “Google hasn’t verified this app” notice; the study team will show you how to continue.\]

**§6 Third-Party Services — replace the last sentence**

> GATHER’s access to Google data is subject to our compliance with the Google API Services User Data Policy, the Google Health API Developer and User Data Policy, and the Google Health API User Data and Health Research Policy\[, and, for Oura and Garmin data, the Oura API License Agreement and the Garmin developer program terms\].

**§9 No Medical Advice — add after “Wearable data may be inaccurate or incomplete.”**

> No one monitors your wearable data as it is recorded. GATHER collects each day’s data only after that day has ended in your time zone, sometimes days later if your device syncs late, and your care team may not look at it until your next appointment. If you have a symptom or concern, contact your care team directly, and call 911 in an emergency.

**§12 Limitation of Liability — replace**

> This section applies only to the BRIDGE and GATHER software, not to your participation in the Study. To the fullest extent permitted by law, UCSF and The Regents of the University of California are not liable for indirect, incidental, special, consequential, or punitive damages caused by the software being unavailable, interrupted, or inaccurate. Nothing in these Terms asks you to give up any of your legal rights as a research participant, or releases UCSF, the Study investigators, or anyone else from liability for negligence. Your rights, including what happens if you are injured as a result of being in the Study, are described in your informed consent form.

**§13 Withdrawal — replace “disconnect your device”** with “remove BRIDGE Gather’s access to your Google account (see Privacy Policy, Section 13)”.

**§14 Changes — replace “Continued use of the applications after changes take effect constitutes acceptance of the revised Terms.”** Participants do nothing after connecting, so “continued use” would make silence count as agreement.

> If we make a change that affects participants, we will tell you before it takes effect and, when the IRB requires it, ask for your consent again. A change to these Terms will never reduce your rights under your informed consent form. If you do not agree with a change, you may withdraw from the Study and disconnect your account at any time.

**§16 Contact Us** — use the same HRPP line as Privacy §16, and the contact email the team picks (Q4).

## Questions for the team

The Gather code can't settle these, and each one decides a bracketed choice above. Type answers in the last column.

| Q | Question | Affects | Ask | Answer |
| --- | --- | --- | --- | --- |
| 1 | Does any live system collect Oura or Garmin data? Gather has never had code for either. | Privacy §1–§4, §10, §13; Terms §2, §4, §6 | Study team |  |
| 2 | Does every participant get a Study device, or may some use their own? Is the Google account personal or created for the Study? | Privacy §2, §3.1; Terms §4 | Study team |  |
| 3 | Is the mojito server's disk or database encrypted? Who can reach mojito.ucsf.edu/gather/ (network, VPN, sign-in)? Is access logged? Does BRIDGE enforce roles? | Privacy §7 | UCSF IT |  |
| 4 | Which contact email goes on the pages: bridge@ucsf.edu (pages now) or selfieapp@ucsf.edu (Google consent screen)? | Privacy §1, §16; Terms §16; home section | Study team |  |
| 5 | Does the consent form say clinicians and researchers may view individual data, and cover Google's research disclosures (purpose and duration, risks, privacy measures, contact, retention, withdrawal, deletion)? | Privacy §9 | IRB / study team |  |
| 6 | Do participants sign an IRB-reviewed HIPAA authorization? Has UCSF asked Google for written approval to use the data as PHI? | Privacy §6 | UCSF Privacy Office |  |
| 7 | What retention period does the protocol set? On deletion, what happens to exported files, BRIDGE copies and backups? | Privacy §11, §12 | Study team |  |
| 8 | Can anyone under 18 enroll? | Privacy §14 | IRB |  |
| 9 | Can participants see their own data in BRIDGE? Privacy §5 says it is displayed "to you"; Gather has no participant view. | Privacy §5 | BRIDGE team |  |
| 10 | Does the Study still hold data, or open grants, from the old Fitbit Web API? | Privacy §4, §13 | Study team |  |
| 11 | Can a start date be set before the consent date? | Privacy §3.1 | Study team |  |
| 12 | How many IRB protocols use Gather? The pages describe one "Study". | Both pages | Study team |  |

## Gather code changes that make the pages true

Some promises in the pages hold only after a change to Gather itself; the first is something Google's Health API review requires.

| # | Change | Why | Where now |
| --- | --- | --- | --- |
| 1 | Show a disclosure screen before Google's permission screen: what data BRIDGE Gather reads, who sees it, that it is never sold, how to disconnect, a Privacy Policy link, and Continue to Google / Cancel buttons | Google Health API rules require this disclosure inside the app, not only in a policy | Connect Google goes straight to Google (gather/gather.py:570-590) |
| 2 | Stop using a participant's Google access after their end date, or disconnect them automatically | Pages say collection is limited to the enrollment period; today the 3-hourly sync still refreshes the token and reads settings for every connected patient | gather/gather.py:1001-1003; gather/google\_health\_sync.py:680-681 |
| 3 | Tell the coordinator when revoking at Google fails | Disconnect clears Gather's copy of the tokens even if Google refused the revoke, leaving the grant active unnoticed | gather/gather.py:667-673, 707 |
| 4 | Rename the app's own pages from "UCSF Gather" to "BRIDGE Gather" | Same name everywhere a participant or reviewer looks | gather/templates/base.html:5, 14 |
| 5 | Before any Google security assessment: encrypt stored tokens and add sign-in to Gather | Gather stores tokens in plain database columns and relies on network access alone | gather/models/patient.py:23-24 |

## Sources

The three bridge.ucsf.edu pages were read on 2026-10-08, and every Gather claim was checked against the ucsf-gather code. Google's policy pages couldn't be opened from the environment that did this review, so the Google wording above comes from search excerpts. Check the exact policy names and Limited Use wording against the live pages before publishing.

- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)
- [Google Health API Developer and User Data Policy](https://developers.google.com/health/policies/health-api-developer-user-data-policy)
- [Google Health API User Data and Health Research Policy](https://developers.google.com/health/policies/health-api-user-data-and-research-policy)
- [Google Health API app verification](https://developers.google.com/health/app-verification)
- [Google OAuth brand verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification)
- [Google Cloud help: app homepage requirements](https://support.google.com/cloud/answer/13807376)
- [45 CFR 46.116, informed consent (no exculpatory language)](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116)
- [UCSF IRB / HRPP contact](https://irb.ucsf.edu/contact-us)
