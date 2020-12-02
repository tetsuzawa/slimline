<!-- 
![frontend](https://github.com/VG-Tech-Dojo/treasure-2020-b/workflows/frontend/badge.svg)
![backend](https://github.com/VG-Tech-Dojo/treasure-2020-b/workflows/backend/badge.svg)
![migrate](https://github.com/VG-Tech-Dojo/treasure-2020-b/workflows/migrate/badge.svg)
![ci](https://github.com/VG-Tech-Dojo/treasure-2020-b/workflows/ci/badge.svg)
![reviewdog](https://github.com/VG-Tech-Dojo/treasure-2020-b/workflows/reviewdog/badge.svg)
-->

![title_slide](https://user-images.githubusercontent.com/38237246/94214743-5b564d00-ff15-11ea-9660-8aeeaf63ce36.png)

# 目次
- [SlimLineについて](#SlimLineについて)
- [開発背景](#開発背景)
- [開発担当](#開発担当)
- [サービスのアーキテクチャ](#サービスのアーキテクチャ)
- [スクリーンショット](#スクリーンショット)


# SlimLineについて


SlimLineはコロナウィルスの影響でパーソナルトレーニングを対面でできなくなったジムのトレーナーや、オンラインに活動の幅を広げたいトレーナー向けの、
オンラインレッスンの開催を支援するサービスです。

SlimLineではオンラインでPTを始める際に生じる雑用に手間をかけず、自分だけのWebサイトが作れることができ、SNSで培った自分のブランド力を生かしてオンラインでのレッスンを始めることができます。

また、LINE・インスタライブなど既存のSNSやビデオチャットツールを使ってレッスンをするのとは違い、
予約の管理や決済、配信の準備までサービス側で一貫して行える機能が備わっています。

# 開発背景

SlimLineはもともとVOYAGE GROUPのサマーインターンの期間中に開発したサービスです。

アイデア出しに4日、設計・技術検証で２日、コーディングで3日という厳しいスケジュールの中、MVP（Minimum Viable Product）を全体で共有することでコア機能を完成させています。

アイデア出しでは、まず時流や社会のゆらぎを考えました。私たちのチームでは世の中を広く捉え、コロナ禍で困っているジムのトレーナーと運動不足の人をターゲットにしました。そして今の社会にとって本当に必要であると自信を持って言えるアイデアを出すことができました。

実際の開発では、短い時間の中で安全性の高いサービスを作るために、認証や決済は外部サービスを利用しています。さらにCI/CDを開発初期段階で導入することで、バグの修正などで余計な時間をとられないような効率の良い開発を心がけています。

インターンシップ期間に完成して終わりではなく、今後も開発を続けられる拡張性のある設計をしています。サービスとしてのコア機能が完成しているので、今すぐにでも公開できるサービスになっています。


# 開発担当

- フロントエンド
  - [@Ogijun2018](https://github.com/Ogijun2018)
  - [@Kudoas](https://github.com/Kudoas)
- バックエンド
  - [@tetsuzawa](https://github.com/tetsuzawa)
  - [@tokoroten-lab](https://github.com/tokoroten-lab)

# サービスのアーキテクチャ

![architecture](https://user-images.githubusercontent.com/38237246/94214744-5c877a00-ff15-11ea-8cf5-de879067dbb3.png)


# スクリーンショット

![title_slide_1](https://user-images.githubusercontent.com/38237246/94233012-2a404180-ff42-11ea-9d99-c0c3173b415c.png)
![about_1](https://user-images.githubusercontent.com/38237246/94233011-29a7ab00-ff42-11ea-8c71-11b858ef01f9.png)
![how_to_use_1](https://user-images.githubusercontent.com/38237246/94233007-28767e00-ff42-11ea-90d5-823a0281ec30.png)
![how_to_use_2](https://user-images.githubusercontent.com/38237246/94233293-a044a880-ff42-11ea-86ec-7f61a44f33c1.png)

