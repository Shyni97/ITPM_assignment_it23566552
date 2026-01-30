import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';
const singlishInputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
const sinhalaOutputSelector = 'div.bg-slate-50.whitespace-pre-wrap';

async function translate(page, text: string) {
  const input = page.locator(singlishInputSelector);
  const output = page.locator(sinhalaOutputSelector);
  await page.goto(URL);
  await input.fill('');
  if (text.length > 0) {
    await input.type(text, { delay: 50 });
    await expect(output).not.toBeEmpty({ timeout: 5000 });
  }
  return output;
}

// ----------------------------
// POSITIVE TEST CASES
// ----------------------------

test('Pos_Fun_0001 - oyaata kohomadha?', async ({ page }) => {
  const output = await translate(page, 'oyaata kohomadha?');
  await expect(output).toContainText('ඔයාට');
});

test('Pos_Fun_0002 - mama gedhara yanavaa.', async ({ page }) => {
  const output = await translate(page, 'mama gedhara yanavaa.');
  await expect(output).toContainText('මම');
});

test('Pos_Fun_0003 - mata udhavvak karanna puluvandha?', async ({ page }) => {
  const output = await translate(page, 'mata udhavvak karanna puluvandha?');
  await expect(output).toContainText('මට');
});

test('Pos_Fun_0004 - api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.', async ({ page }) => {
  const output = await translate(page, 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');
  await expect(output).toContainText('අපි');
});

test('Pos_Fun_0005 - mama heta enavaa.', async ({ page }) => {
  const output = await translate(page, 'mama heta enavaa.');
  await expect(output).toContainText('හෙට');
});

test('Pos_Fun_0006 - Zoom meeting ekak thiyennee heta.', async ({ page }) => {
  const output = await translate(page, 'Zoom meeting ekak thiyennee heta.');
  await expect(output).toContainText('Zoom');
});

test('Pos_Fun_0007 - mama ehema karanne naehae.', async ({ page }) => {
  const output = await translate(page, 'mama ehema karanne naehae.');
  await expect(output).toContainText('නැහැ');
});

test('Pos_Fun_0008 - heta oya class enavadha? mata enna venne nae. mata class eke karana evaa passe kiyala dhenna puluvandha?', async ({ page }) => {
  const output = await translate(page, 'heta oya class enavadha? mata enna venne nae. mata class eke karana evaa passe kiyala dhenna puluvandha?');
  await expect(output).toContainText('හෙට');
});

test('Pos_Fun_0009 - mama kalin eka karala thiyenava.', async ({ page }) => {
  const output = await translate(page, 'mama kalin eka karala thiyenava.');
  await expect(output).toContainText('මම');
});

test('Pos_Fun_0010 - api issarahata yanava.', async ({ page }) => {
  const output = await translate(page, 'api issarahata yanava.');
  await expect(output).toContainText('අපි');
});

test('Pos_Fun_0011 - oba vaede karaganna.', async ({ page }) => {
  const output = await translate(page, 'oba vaede karaganna.');
  await expect(output).toContainText('ඔබ');
});

test('Pos_Fun_0012 - mama tea aethi venna bivva vena thanaka iddi.', async ({ page }) => {
  const output = await translate(page, 'mama tea aethi venna bivva vena thanaka iddi.');
  await expect(output).toContainText('මම');
});

test('Pos_Fun_0013 - kattiyata heta vedhdhi vade karala ona.', async ({ page }) => {
  const output = await translate(page, 'kattiyata heta vedhdhi vade karala ona.');
  await expect(output).toContainText('හෙට');
});

test('Pos_Fun_0014 - mama hitiyoth eyata karanna puluvan.', async ({ page }) => {
  const output = await translate(page, 'mama hitiyoth eyata karanna puluvan.');
  await expect(output).toContainText('මම');
});

test('Pos_Fun_0015 - suba udhaesanak oyata!', async ({ page }) => {
  const output = await translate(page, 'suba udhaesanak oyata!');
  await expect(output).toContainText('උදැසන');
});

test('Pos_Fun_0016 - mama kalin gedhara yanavaa.', async ({ page }) => {
  const output = await translate(page, 'mama kalin gedhara yanavaa.');
  await expect(output).toContainText('මම');
});

test('Pos_Fun_0017 - ekata vadaa meka ganandha?', async ({ page }) => {
  const output = await translate(page, 'ekata vadaa meka ganandha?');
  await expect(output).toContainText('ගනන්ද');
});

test('Pos_Fun_0018 - eka mokatadha karanne?', async ({ page }) => {
  const output = await translate(page, 'eka mokatadha karanne?');
  await expect(output).toContainText('මොකටද');
});

test('Pos_Fun_0019 - dhaen kaalea godak lamayi igena ganne online class valin. Zoom saha Teams haraha lesiyen connect venna puluvan ne. gedhara idhan igena ganna eka lesi unath, yaluvo hamba wenne nathi eka aparadhee. Internet connection eka hoda nathnam class eka karanna amaru venava. WIFI ekak gedhara thiynvanm vaeda lesi haebyi pooth valin lamayi aeth venvaa.', async ({ page }) => {
  const output = await translate(page, 'dhaen kaalea godak lamayi igena ganne online class valin. Zoom saha Teams haraha lesiyen connect venna puluvan ne. gedhara idhan igena ganna eka lesi unath, yaluvo hamba wenne nathi eka aparadhee. Internet connection eka hoda nathnam class eka karanna amaru venava. WIFI ekak gedhara thiynvanm vaeda lesi haebyi pooth valin lamayi aeth venvaa.');
  await expect(output).not.toBeEmpty('කාලේ');
});

test('Pos_Fun_0020 - oba enavanam mama yanavaa.', async ({ page }) => {
  const output = await translate(page, 'oba enavanam mama yanavaa.');
  await expect(output).toContainText('ඔබ');
});

test('Pos_Fun_0021 - mata annasi achcharu ekak ganna onea.', async ({ page }) => {
  const output = await translate(page, 'mata annasi achcharu ekak ganna onea.');
  await expect(output).toContainText('මට');
});

test('Pos_Fun_0022 - oya ahanna epaa.', async ({ page }) => {
  const output = await translate(page, 'oya ahanna epaa.');
  await expect(output).toContainText('එපා');
});

test('Pos_Fun_0023 - oya eka karala thiyenavadha?', async ({ page }) => {
  const output = await translate(page, 'oya eka karala thiyenavadha?');
  await expect(output).toContainText('තියෙනව');
});

test('Pos_Fun_0024 - mata gedhara podi vaeda vagayak thiyanavaa enisa mama adha innava gedhara. itapasse mama office yanavaa.', async ({ page }) => {
  const output = await translate(page, 'mata gedhara podi vaeda vagayak thiyanavaa enisa mama adha innava gedhara. itapasse mama office yanavaa.');
  await expect(output).toContainText('මම');
});

// ----------------------------
// NEGATIVE TEST CASES
// ----------------------------

test('Neg_Fun_0001 - mamagedharaenavaa', async ({ page }) => {
  const output = await translate(page, 'mamagedharaenavaa');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0002 - elaz mchn mama office yanne late venna puluvan', async ({ page }) => {
  const output = await translate(page, 'elaz mchn mama office yanne late venna puluvan');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0003 - ma ma gedha ra yanava', async ({ page }) => {
  const output = await translate(page, 'ma ma gedha ra yanava');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0004 - machan ela today class yanne naha mama', async ({ page }) => {
  const output = await translate(page, 'machan ela today class yanne naha mama');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0005 - api     bus           eke yanava', async ({ page }) => {
  const output = await translate(page, 'api     bus           eke yanava');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0006 - api @ beach # yamu!!', async ({ page }) => {
  const output = await translate(page, 'api @ beach # yamu!!');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0007 - aiyo!!! mokada me????', async ({ page }) => {
  const output = await translate(page, 'aiyo!!! mokada me????');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0008 - qwerty zxcvb random words', async ({ page }) => {
  const output = await translate(page, 'qwerty zxcvb random words');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0009 - mamaaa mama gaeddaara yanvaa', async ({ page }) => {
  const output = await translate(page, 'mamaaa mama gaeddaara yanvaa');
  await expect(output).not.toBeEmpty();
});

test('Neg_Fun_0010 - Empty input', async ({ page }) => {
  await page.goto(URL);
  const output = page.locator(sinhalaOutputSelector);
  await expect(output).toBeEmpty();
});

// ----------------------------
// Positive UI test case
// ----------------------------

test('Pos_UI_0002 - Verify real-time output updates as each character is typed', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator(singlishInputSelector);
  const output = page.locator(sinhalaOutputSelector);

  const text = 'mata ticket tik ganna';

  await input.type(text, { delay: 100 });

  await expect(output).not.toBeEmpty();

  await expect(output).toContainText('මට');
});

