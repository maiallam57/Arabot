import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";
import { MiniMuslimService } from '../../../../services/mini-muslim.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-holy-quran-audio',
  standalone: true,
  imports: [TitleComponent, NgFor],
  templateUrl: './holy-quran-audio.component.html',
  styleUrl: './holy-quran-audio.component.css'
})
export class HolyQuranAudioComponent implements OnInit, OnDestroy {
  title: string = "Holy Quran Audio";
  desc: string = "";

  surahNumber: number = 1;

  private readonly _miniMuslimService = inject(MiniMuslimService);
  getHolyQuranSub!: Subscription;
  audioList: any;

  ngOnInit(): void {

    this._miniMuslimService.getHolyQuranAudio((this.surahNumber.toString())).subscribe({
      next: (res) => {
        this.audioList = res.audio_files;
        console.log(this.audioList);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.getHolyQuranSub?.unsubscribe();
  }


  surahList = [
    'Al-Faatiha (سُورَةُ ٱلْفَاتِحَةِ)',
    'Al-Baqara (سُورَةُ البَقَرَةِ)',
    'Aal-i-Imraan (سُورَةُ آلِ عِمۡرَانَ)',
    'An-Nisaa (سُورَةُ النِّسَاءِ)',
    'Al-Maaida (سُورَةُ المَائـِدَةِ)',
    'Al-An\'aam(سُورَةُ الأَنۡعَامِ)',
    'Al-A\'raaf(سُورَةُ الأَعۡرَافِ)',
    'Al-Anfaal (سُورَةُ الأَنفَالِ)',
    'At-Tawba (سُورَةُ التَّوۡبَةِ)',
    'Yunus (سُورَةُ يُونُسَ)',
    'Hud (سُورَةُ هُودٍ)',
    'Yusuf (سُورَةُ يُوسُفَ)',
    'Ar-Ra\'d(سُورَةُ الرَّعۡدِ)',
    'Ibrahim (سُورَةُ إِبۡرَاهِيمَ)',
    'Al-Hijr (سُورَةُ الحِجۡرِ)',
    'An-Nahl (سُورَةُ النَّحۡلِ)',
    'Al- Israa(سُورَةُ الإِسۡرَاءِ)',
    'Al-Kahf (سُورَةُ الكَهۡفِ)',
    'Maryam (سُورَةُ مَرۡيَمَ)',
    'Taa-Haa (سُورَةُ طه)',
    'Al-Anbiyaa (سُورَةُ الأَنبِيَاءِ)',
    'Al-Hajj (سُورَةُ الحَجِّ)',
    'Al-Muminoon (سُورَةُ المُؤۡمِنُونَ)',
    'An-Noor (سُورَةُ النُّورِ)',
    'Al-Furqaan (سُورَةُ الفُرۡقَانِ)',
    'Ash-Shu\'araa(سُورَةُ الشُّعَرَاءِ)',
    'An-Naml (سُورَةُ النَّمۡلِ)',
    'Al-Qasas (سُورَةُ القَصَصِ)',
    'Al-Ankaboot (سُورَةُ العَنكَبُوتِ)',
    'Ar-Room (سُورَةُ الرُّومِ)',
    'Luqman (سُورَةُ لُقۡمَانَ)',
    'As-Sajda (سُورَةُ السَّجۡدَةِ)',
    'Al-Ahzaab (سُورَةُ الأَحۡزَابِ)',
    'Saba (سُورَةُ سَبَإٍ)',
    'Faatir (سُورَةُ فَاطِرٍ)',
    'Yaseen (سُورَةُ يسٓ)',
    'As-Saaffaat (سُورَةُ الصَّافَّاتِ)',
    'Saad (سُورَةُ صٓ)',
    'Az-Zumar (سُورَةُ الزُّمَرِ)',
    'Ghafir (سُورَةُ غَافِرٍ)',
    'Fussilat (سُورَةُ فُصِّلَتۡ)',
    'Ash-Shura (سُورَةُ الشُّورَىٰ)',
    'Az-Zukhruf (سُورَةُ الزُّخۡرُفِ)',
    'Ad-Dukhaan (سُورَةُ الدُّخَانِ)',
    'Al-Jaathiya (سُورَةُ الجَاثِيَةِ)',
    'Al-Ahqaf (سُورَةُ الأَحۡقَافِ)',
    'Muhammad (سُورَةُ مُحَمَّدٍ)',
    'Al-Fath (سُورَةُ الفَتۡحِ)',
    'Al-Hujuraat (سُورَةُ الحُجُرَاتِ)',
    'Qaaf (سُورَةُ قٓ)',
    'Adh-Dhaariyat (سُورَةُ الذَّارِيَاتِ)',
    'At-Tur (سُورَةُ الطُّورِ)',
    'An-Najm (سُورَةُ النَّجۡمِ)',
    'Al-Qamar (سُورَةُ القَمَرِ)',
    'Ar-Rahmaan (سُورَةُ الرَّحۡمَٰن)',
    'Al-Waaqia (سُورَةُ الوَاقِعَةِ)',
    'Al-Hadid (سُورَةُ الحَدِيدِ)',
    'Al-Mujaadila (سُورَةُ المُجَادلَةِ)',
    'Al-Hashr (سُورَةُ الحَشۡرِ)',
    'Al-Mumtahana (سُورَةُ المُمۡتَحنَةِ)',
    'As-Saff (سُورَةُ الصَّفِّ)',
    'Al-Jumu\'a(سُورَةُ الجُمُعَةِ)',
    'Al-Munaafiqoon (سُورَةُ المُنَافِقُونَ)',
    'At-Taghaabun (سُورَةُ التَّغَابُنِ)',
    'At-Talaaq (سُورَةُ الطَّلَاقِ)',
    'At-Tahrim (سُورَةُ التَّحۡرِيمِ)',
    'Al-Mulk (سُورَةُ المُلۡكِ)',
    'Al-Qalam (سُورَةُ القَلَمِ)',
    'Al-Haaqqa (سُورَةُ الحَاقَّةِ)',
    'Al-Ma\'aarij(سُورَةُ المَعَارِجِ)',
    'Nooh (سُورَةُ نُوحٍ)',
    'Al-Jinn (سُورَةُ الجِنِّ)',
    'Al-Muzzammil (سُورَةُ المُزَّمِّلِ)',
    'Al-Muddaththir (سُورَةُ المُدَّثِّرِ)',
    'Al-Qiyaama (سُورَةُ القِيَامَةِ)',
    'Al-Insaan (سُورَةُ الإِنسَانِ)',
    'Al-Mursalaat (سُورَةُ المُرۡسَلَاتِ)',
    'An-Naba (سُورَةُ النَّبَإِ)',
    'An-Naazi\'aat(سُورَةُ النَّازِعَاتِ)',
    'Abasa (سُورَةُ عَبَسَ)', 'At-Takwir (سُورَةُ التَّكۡوِيرِ)',
    'Al-Infitaar (سُورَةُ الانفِطَارِ)',
    'Al-Mutaffifin (سُورَةُ المُطَفِّفِينَ)',
    'Al-Inshiqaaq (سُورَةُ الانشِقَاقِ)',
    'Al-Burooj (سُورَةُ البُرُوجِ)',
    'At-Taariq (سُورَةُ الطَّارِقِ)',
    'Al-A\'laa(سُورَةُ الأَعۡلَىٰ)',
    'Al-Ghaashiya (سُورَةُ الغَاشِيَةِ)',
    'Al-Fajr (سُورَةُ الفَجۡرِ)',
    'Al-Balad (سُورَةُ البَلَدِ)',
    'Ash-Shams (سُورَةُ الشَّمۡسِ)',
    'Al-Lail (سُورَةُ اللَّيۡلِ)',
    'Ad-Dhuhaa (سُورَةُ الضُّحَىٰ)',
    'Ash-Sharh (سُورَةُ الشَّرۡحِ)',
    'At-Tin (سُورَةُ التِّينِ)',
    'Al-Alaq (سُورَةُ العَلَقِ)',
    'Al-Qadr (سُورَةُ القَدۡرِ)',
    'Al-Bayyina (سُورَةُ البَيِّنَةِ)',
    'Az-Zalzala (سُورَةُ الزَّلۡزَلَةِ)',
    'Al-Aadiyaat (سُورَةُ العَادِيَاتِ)',
    'Al-Qaari\'a(سُورَةُ القَارِعَةِ)',
    'At-Takaathur (سُورَةُ التَّكَاثُرِ)',
    'Al-Asr (سُورَةُ العَصۡرِ)',
    'Al-Humaza (سُورَةُ الهُمَزَةِ)',
    'Al-Fil (سُورَةُ الفِيلِ)',
    'Quraish (سُورَةُ قُرَيۡشٍ)',
    'Al-Maa\'un(سُورَةُ المَاعُونِ)',
    'Al-Kawthar (سُورَةُ الكَوۡثَرِ)',
    'Al-Kaafiroon (سُورَةُ الكَافِرُونَ)',
    'An-Nasr (سُورَةُ النَّصۡرِ)',
    'Al-Masad (سُورَةُ المَسَدِ)',
    'Al-Ikhlaas (سُورَةُ الإِخۡلَاصِ)',
    'Al-Falaq(سُورَةُ الفَلَقِ)',
    'An-Naas (سُورَةُ النَّاسِ)'
  ];
}

