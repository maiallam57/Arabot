import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";
import { SmallCardComponent } from "../../../../../shared/Components/UI/small-card/small-card.component";
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SurahPipe } from '../../../../../shared/pipes/surah.pipe';

@Component({
  selector: 'app-tafsir',
  standalone: true,
  imports: [TitleComponent, SmallCardComponent, RouterLink, NgFor, NgIf, SurahPipe],
  templateUrl: './tafsir.component.html',
  styleUrl: './tafsir.component.css'
})
export class TafsirComponent {
  title: string = "Tafsir";
  desc: string = "";

  surahList = [
    {
      name: 'Al-Faatiha (سُورَةُ ٱلْفَاتِحَةِ)', number: 1
    },
    {
      name: 'Al-Baqara (سُورَةُ البَقَرَةِ)', number: 2
    },
    {
      name: 'Aal-i-Imraan (سُورَةُ آلِ عِمۡرَانَ)', number: 3
    },
    {
      name: 'An-Nisaa (سُورَةُ النِّسَاءِ)', number: 4
    },
    {
      name: 'Al-Maaida (سُورَةُ المَائـِدَةِ)', number: 5
    },
    {
      name: 'Al-An\'aam(سُورَةُ الأَنۡعَامِ)', number: 6
    },
    {
      name: 'Al-A\'raaf(سُورَةُ الأَعۡرَافِ)', number: 7
    },
    {
      name: 'Al-Anfaal (سُورَةُ الأَنفَالِ)', number: 8
    },
    {
      name: 'At-Tawba (سُورَةُ التَّوۡبَةِ)', number: 9
    },
    {
      name: 'Yunus (سُورَةُ يُونُسَ)', number: 10
    },
    {
      name: 'Hud (سُورَةُ هُودٍ)', number: 11
    },
    {
      name: 'Yusuf (سُورَةُ يُوسُفَ)', number: 12
    },
    {
      name: 'Ar-Ra\'d(سُورَةُ الرَّعۡدِ)', number: 13
    },
    {
      name: 'Ibrahim (سُورَةُ إِبۡرَاهِيمَ)', number: 14
    },
    {
      name: 'Al-Hijr (سُورَةُ الحِجۡرِ)', number: 15
    },
    {
      name: 'An-Nahl (سُورَةُ النَّحۡلِ)', number: 16
    },
    {
      name: 'Al-Israa (سُورَةُ الإِسۡرَاءِ)', number: 17
    },
    {
      name: 'Al-Kahf (سُورَةُ الكَهۡفِ)', number: 18
    },
    {
      name: 'Maryam (سُورَةُ مَرۡيَمَ)', number: 19
    },
    {
      name: 'Taa-Haa (سُورَةُ طه)', number: 20
    },
    {
      name: 'Al-Anbiyaa (سُورَةُ الأَنبِيَاءِ)', number: 21
    },
    {
      name: 'Al-Hajj (سُورَةُ الحَجِّ)', number: 22
    },
    {
      name: 'Al-Muminoon (سُورَةُ المُؤۡمِنُونَ)', number: 23
    },
    {
      name: 'An-Noor (سُورَةُ النُّورِ)', number: 24
    },
    {
      name: 'Al-Furqaan (سُورَةُ الفُرۡقَانِ)', number: 25
    },
    {
      name: 'Ash-Shu\'araa(سُورَةُ الشُّعَرَاءِ)', number: 26
    },
    {
      name: 'An-Naml (سُورَةُ النَّمۡلِ)', number: 27
    },
    {
      name: 'Al-Qasas (سُورَةُ القَصَصِ)', number: 28
    },
    {
      name: 'Al-Ankaboot (سُورَةُ العَنكَبُوتِ)', number: 29
    },
    {
      name: 'Ar-Room (سُورَةُ الرُّومِ)', number: 30
    },
    {
      name: 'Luqman (سُورَةُ لُقۡمَانَ)', number: 31
    },
    {
      name: 'As-Sajda (سُورَةُ السَّجۡدَةِ)', number: 32
    },
    {
      name: 'Al-Ahzaab (سُورَةُ الأَحۡزَابِ)', number: 33
    },
    {
      name: 'Saba (سُورَةُ سَبَإٍ)', number: 34
    },
    {
      name: 'Faatir (سُورَةُ فَاطِرٍ)', number: 35
    },
    {
      name: 'Yaseen (سُورَةُ يسٓ)', number: 36
    },
    {
      name: 'As-Saaffaat (سُورَةُ الصَّافَّاتِ)', number: 37
    },
    {
      name: 'Saad (سُورَةُ صٓ)', number: 38
    },
    {
      name: 'Az-Zumar (سُورَةُ الزُّمَرِ)', number: 39
    },
    {
      name: 'Ghafir (سُورَةُ غَافِرٍ)', number: 40
    },
    {
      name: 'Fussilat (سُورَةُ فُصِّلَتۡ)', number: 41
    },
    {
      name: 'Ash-Shura (سُورَةُ الشُّورَىٰ)', number: 42
    },
    {
      name: 'Az-Zukhruf (سُورَةُ الزُّخۡرُفِ)', number: 43
    },
    {
      name: 'Ad-Dukhaan (سُورَةُ الدُّخَانِ)', number: 44
    },
    {
      name: 'Al-Jaathiya (سُورَةُ الجَاثِيَةِ)', number: 45
    },
    {
      name: 'Al-Ahqaf (سُورَةُ الأَحۡقَافِ)', number: 46
    },
    {
      name: 'Muhammad (سُورَةُ مُحَمَّدٍ)', number: 47
    },
    {
      name: 'Al-Fath (سُورَةُ الفَتۡحِ)', number: 48
    },
    {
      name: 'Al-Hujuraat (سُورَةُ الحُجُرَاتِ)', number: 49
    },
    {
      name: 'Qaaf (سُورَةُ قٓ)', number: 50
    },
    {
      name: 'Adh-Dhaariyat (سُورَةُ الذَّارِيَاتِ)', number: 51
    },
    {
      name: 'At-Tur (سُورَةُ الطُّورِ)', number: 52
    },
    {
      name: 'An-Najm (سُورَةُ النَّجۡمِ)', number: 53
    },
    {
      name: 'Al-Qamar (سُورَةُ القَمَرِ)', number: 54
    },
    {
      name: 'Ar-Rahmaan (سُورَةُ الرَّحۡمَٰن)', number: 55
    },
    {
      name: 'Al-Waaqia (سُورَةُ الوَاقِعَةِ)', number: 56
    },
    {
      name: 'Al-Hadid (سُورَةُ الحَدِيدِ)', number: 57
    },
    {
      name: 'Al-Mujaadila (سُورَةُ المُجَادلَةِ)', number: 58
    },
    {
      name: 'Al-Hashr (سُورَةُ الحَشۡرِ)', number: 59
    },
    {
      name: 'Al-Mumtahana (سُورَةُ المُمۡتَحنَةِ)', number: 60
    },
    {
      name: 'As-Saff (سُورَةُ الصَّفِّ)', number: 61
    },
    {
      name: 'Al-Jumu\'a(سُورَةُ الجُمُعَةِ)', number: 62
    },
    {
      name: 'Al-Munaafiqoon (سُورَةُ المُنَافِقُونَ)', number: 63
    },
    {
      name: 'At-Taghaabun (سُورَةُ التَّغَابُنِ)', number: 64
    },
    {
      name: 'At-Talaaq (سُورَةُ الطَّلَاقِ)', number: 65
    },
    {
      name: 'At-Tahrim (سُورَةُ التَّحۡرِيمِ)', number: 66
    },
    {
      name: 'Al-Mulk (سُورَةُ المُلۡكِ)', number: 67
    },
    {
      name: 'Al-Qalam (سُورَةُ القَلَمِ)', number: 68
    },
    {
      name: 'Al-Haaqqa (سُورَةُ الحَاقَّةِ)', number: 69
    },
    {
      name: 'Al-Ma\'aarij(سُورَةُ المَعَارِجِ)', number: 70
    },
    {
      name: 'Nooh (سُورَةُ نُوحٍ)', number: 71
    },
    {
      name: 'Al-Jinn (سُورَةُ الجِنِّ)', number: 72
    },
    {
      name: 'Al-Muzzammil (سُورَةُ المُزَّمِّلِ)', number: 73
    },
    {
      name: 'Al-Muddaththir (سُورَةُ المُدَّثِّرِ)', number: 74
    },
    {
      name: 'Al-Qiyaama (سُورَةُ القِيَامَةِ)', number: 75
    },
    {
      name: 'Al-Insaan (سُورَةُ الإِنسَانِ)', number: 76
    },
    {
      name: 'Al-Mursalaat (سُورَةُ المُرۡسَلَاتِ)', number: 77
    },
    {
      name: 'An-Naba (سُورَةُ النَّبَإِ)', number: 78
    },
    {
      name: 'An-Naazi\'aat(سُورَةُ النَّازِعَاتِ)', number: 79
    },
    {
      name: 'Abasa (سُورَةُ عَبَسَ)', number: 80
    }, {
      name: 'At-Takwir (سُورَةُ التَّكۡوِيرِ)', number: 81
    },
    {
      name: 'Al-Infitaar (سُورَةُ الانفِطَارِ)', number: 82
    },
    {
      name: 'Al-Mutaffifin (سُورَةُ المُطَفِّفِينَ)', number: 83
    },
    {
      name: 'Al-Inshiqaaq (سُورَةُ الانشِقَاقِ)', number: 84
    },
    {
      name: 'Al-Burooj (سُورَةُ البُرُوجِ)', number: 85
    },
    {
      name: 'At-Taariq (سُورَةُ الطَّارِقِ)', number: 86
    },
    {
      name: 'Al-A\'laa(سُورَةُ الأَعۡلَىٰ)', number: 87
    },
    {
      name: 'Al-Ghaashiya (سُورَةُ الغَاشِيَةِ)', number: 88
    },
    {
      name: 'Al-Fajr (سُورَةُ الفَجۡرِ)', number: 89
    },
    {
      name: 'Al-Balad (سُورَةُ البَلَدِ)', number: 90
    },
    {
      name: 'Ash-Shams (سُورَةُ الشَّمۡسِ)', number: 91
    },
    {
      name: 'Al-Lail (سُورَةُ اللَّيۡلِ)', number: 92
    },
    {
      name: 'Ad-Dhuhaa (سُورَةُ الضُّحَىٰ)', number: 93
    },
    {
      name: 'Ash-Sharh (سُورَةُ الشَّرۡحِ)', number: 94
    },
    {
      name: 'At-Tin (سُورَةُ التِّينِ)', number: 95
    },
    {
      name: 'Al-Alaq (سُورَةُ العَلَقِ)', number: 96
    },
    {
      name: 'Al-Qadr (سُورَةُ القَدۡرِ)', number: 97
    },
    {
      name: 'Al-Bayyina (سُورَةُ البَيِّنَةِ)', number: 98
    },
    {
      name: 'Az-Zalzala (سُورَةُ الزَّلۡزَلَةِ)', number: 99
    },
    {
      name: 'Al-Aadiyaat (سُورَةُ العَادِيَاتِ)', number: 100
    },
    {
      name: 'Al-Qaari\'a(سُورَةُ القَارِعَةِ)', number: 101
    },
    {
      name: 'At-Takaathur (سُورَةُ التَّكَاثُرِ)', number: 102
    },
    {
      name: 'Al-Asr (سُورَةُ العَصۡرِ)', number: 103
    },
    {
      name: 'Al-Humaza (سُورَةُ الهُمَزَةِ)', number: 104
    },
    {
      name: 'Al-Fil (سُورَةُ الفِيلِ)', number: 105
    },
    {
      name: 'Quraish (سُورَةُ قُرَيۡشٍ)', number: 106
    },
    {
      name: 'Al-Maa\'un(سُورَةُ المَاعُونِ)', number: 107
    },
    {
      name: 'Al-Kawthar (سُورَةُ الكَوۡثَرِ)', number: 108
    },
    {
      name: 'Al-Kaafiroon (سُورَةُ الكَافِرُونَ)', number: 109
    },
    {
      name: 'An-Nasr (سُورَةُ النَّصۡرِ)', number: 110
    },
    {
      name: 'Al-Masad (سُورَةُ المَسَدِ)', number: 111
    },
    {
      name: 'Al-Ikhlaas (سُورَةُ الإِخۡلَاصِ)', number: 112
    },
    { name: 'Al-Falaq(سُورَةُ الفَلَقِ)', number: 113 },
    { name: 'An-Naas (سُورَةُ النَّاسِ)', number: 114 }
  ];
}
