-- ---------------------------------------------------------------------------
-- PLT Insider — rapports et revues annuelles déplacés sur Google Drive.
--
-- Remplace le chemin de bucket de chaque rapport mensuel (janvier 2024 →
-- septembre 2026) par son lien de partage Drive, dossier « PLT Insider /
-- Rapports AAAA / <Mois> ». Aucune ligne n'est créée : seuls les rapports déjà
-- en base sont mis à jour, et la migration échoue s'il en manque un.
--
-- Revues annuelles : 2025 passe sur la version Drive (réexportée, 206 pages au
-- lieu de 228), 2024 est ajoutée et publiée, 2026 pointe vers son fichier Drive
-- (identique à celui du bucket).
--
-- Taille et nombre de pages relevés sur les fichiers Drive.
-- ---------------------------------------------------------------------------

do $$
declare
  updated int;
begin
  with drive (month, portfolio_key, document_url, file_size_bytes, page_count) as (
    values
      ('2024-01-01'::date, 'antifragile', 'https://drive.google.com/file/d/1jq0sBmJxacKZEp3EHSQ7mvdneXfls7RN/view', 3564573, 18),
      ('2024-01-01'::date, 'dividende', 'https://drive.google.com/file/d/1O5MMf47s2gYRt1jXcddJsLRMHeRcd2jB/view', 3675668, 17),
      ('2024-01-01'::date, 'efficient', 'https://drive.google.com/file/d/1TYG9NhfZKXI1FGjJAJpX2SZh9cp_ufdy/view', 3526355, 19),
      ('2024-02-01'::date, 'antifragile', 'https://drive.google.com/file/d/1V9zqEB78onFywJiOSJMiOO_pBOHS7P8V/view', 2972883, 15),
      ('2024-02-01'::date, 'dividende', 'https://drive.google.com/file/d/1Is_ZgYM0B1lkpFIM-T33f3KVamY9NeBS/view', 3106304, 14),
      ('2024-02-01'::date, 'efficient', 'https://drive.google.com/file/d/1F-JRme44-NZhURlGvP42xSxxJSwA-WmD/view', 3331653, 17),
      ('2024-03-01'::date, 'antifragile', 'https://drive.google.com/file/d/1aWznAurAg1VlDQvHJzuA41W1m5xRwfVv/view', 7677655, 11),
      ('2024-03-01'::date, 'dividende', 'https://drive.google.com/file/d/1ycymG0bfLcJuTBYIqYOjDkWHTHAR0MW-/view', 7741283, 11),
      ('2024-03-01'::date, 'efficient', 'https://drive.google.com/file/d/1I7YZdaACSrI7dKwTZuhp4KPO0nGL5IX_/view', 10463633, 14),
      ('2024-04-01'::date, 'antifragile', 'https://drive.google.com/file/d/1XvEOwppdbY7FYiiqp-ERaApq2QHC3uBm/view', 9108696, 13),
      ('2024-04-01'::date, 'dividende', 'https://drive.google.com/file/d/1TsmXT4RkMm5gUVgXza_6lufReREULKhm/view', 9139527, 13),
      ('2024-04-01'::date, 'efficient', 'https://drive.google.com/file/d/1D7meh9uUHTTRF87CUg8qyiR6F3Xs23Bz/view', 12007295, 16),
      ('2024-05-01'::date, 'antifragile', 'https://drive.google.com/file/d/1DGTTUrXx0fW1WqEMEXf-oxqIP7vSX0P-/view', 9170656, 13),
      ('2024-05-01'::date, 'dividende', 'https://drive.google.com/file/d/1FJmGxppTe1Ot-HcATXuNUF5IaTY07WyJ/view', 7684436, 11),
      ('2024-05-01'::date, 'efficient', 'https://drive.google.com/file/d/1HS6ultxHZH07z7isghHLlE2EEKLuhnXF/view', 10506945, 14),
      ('2024-06-01'::date, 'antifragile', 'https://drive.google.com/file/d/1RKdzYMZ56A-r1bnXG4AEZvl_iv076few/view', 8482511, 12),
      ('2024-06-01'::date, 'dividende', 'https://drive.google.com/file/d/1VcQsReME4lHXIz9rS579X5vJXOk4YabJ/view', 8399190, 12),
      ('2024-06-01'::date, 'efficient', 'https://drive.google.com/file/d/1oxCz4NAf5vabsBuYkpAyrr-YRRPqK_qh/view', 9775115, 13),
      ('2024-07-01'::date, 'antifragile', 'https://drive.google.com/file/d/1In7sy9oAuyrWCq8cWccJX4GLjnF7N2-y/view', 10323111, 10),
      ('2024-07-01'::date, 'dividende', 'https://drive.google.com/file/d/10pfjfjXyKa_LDTWlkW0PYqpTd75Grpty/view', 10925328, 11),
      ('2024-07-01'::date, 'efficient', 'https://drive.google.com/file/d/154I80rwiSEUS0dAugT2ln4XqbuZRr_kI/view', 11484738, 11),
      ('2024-08-01'::date, 'antifragile', 'https://drive.google.com/file/d/1--3uwm7g1mXP-Ty8Z7vcb85cO7AnHoEp/view', 12354502, 13),
      ('2024-08-01'::date, 'dividende', 'https://drive.google.com/file/d/1Y7z9HzNGlvceej1t9hCdO20bzGuFKWdw/view', 12358383, 13),
      ('2024-08-01'::date, 'efficient', 'https://drive.google.com/file/d/1owyaGcdseee1CihZKEIGQwL6vUXLLBqy/view', 13790145, 14),
      ('2024-09-01'::date, 'antifragile', 'https://drive.google.com/file/d/1I_bRg2n9T8VlzvjW6fpYWdfCftq0iP7Q/view', 11663694, 12),
      ('2024-09-01'::date, 'dividende', 'https://drive.google.com/file/d/11JugrKUxMVOZrOC9lp9QcKwE3OCPv1c1/view', 11695251, 12),
      ('2024-09-01'::date, 'efficient', 'https://drive.google.com/file/d/1tmYoSKoLuFEuyOR7v0yHcbwCw3ubfBGG/view', 12314348, 12),
      ('2024-10-01'::date, 'antifragile', 'https://drive.google.com/file/d/1rjBs3ZerR1wcgRj3SZ0kWs-ZFvkC96dV/view', 16132946, 18),
      ('2024-10-01'::date, 'dividende', 'https://drive.google.com/file/d/1LjVbSuHLbsCGMbjWoIoanRqEB3mZGU0n/view', 15464296, 17),
      ('2024-10-01'::date, 'efficient', 'https://drive.google.com/file/d/1hBNtaMB3idsHkXoThFz8nd0YnWAiUBF_/view', 16346223, 17),
      ('2024-11-01'::date, 'antifragile', 'https://drive.google.com/file/d/154_vFWXwXDv9eJLWnCFvBLaFdq8voa6j/view', 14589273, 16),
      ('2024-11-01'::date, 'dividende', 'https://drive.google.com/file/d/1yAXk0gBupBg8ZH3Lhzq9IdCIehB7Iokf/view', 13130031, 14),
      ('2024-11-01'::date, 'efficient', 'https://drive.google.com/file/d/1-s4oup_zoC6m8Q1VXtNMdXV5jwkjX1Yn/view', 16898232, 18),
      ('2024-12-01'::date, 'antifragile', 'https://drive.google.com/file/d/1I9rfV8XfNr3vLaaxXOHmzPTtiaWkNOuB/view', 11981779, 12),
      ('2024-12-01'::date, 'dividende', 'https://drive.google.com/file/d/1Eqlf0xQkKQFM0Jcxyq9d77j4RCQkas8p/view', 11939806, 12),
      ('2024-12-01'::date, 'efficient', 'https://drive.google.com/file/d/1p3QvgTo61BWPFH1qi4kfsWv02pJQ6TCm/view', 13329356, 13),
      ('2025-01-01'::date, 'antifragile', 'https://drive.google.com/file/d/1l3l9rc9cKXAE2Iw6RQXA4X4E7DVaN9GW/view', 14781535, 16),
      ('2025-01-01'::date, 'dividende', 'https://drive.google.com/file/d/1w1Vi_CObwq0B7pBHCiRyZZ5Q1rmfgEWP/view', 14049472, 15),
      ('2025-01-01'::date, 'efficient', 'https://drive.google.com/file/d/1l-j6t0n4cnHsp5YbBABStyco2vCwm0yA/view', 16402686, 17),
      ('2025-02-01'::date, 'antifragile', 'https://drive.google.com/file/d/1sTC4hxCFyqEN7sXwa0ukZebiIS339uOI/view', 16141151, 18),
      ('2025-02-01'::date, 'dividende', 'https://drive.google.com/file/d/1L7CnjjwrF-yKlIAu8TVANd1mE6ztVSIr/view', 16070152, 18),
      ('2025-02-01'::date, 'efficient', 'https://drive.google.com/file/d/14UsoybtDchCHFxoHosdL19XqHVtJOpLN/view', 17906039, 19),
      ('2025-03-01'::date, 'antifragile', 'https://drive.google.com/file/d/1YfbTXJ0Y0k30kXg7E1zrw7V0L-B-MXj8/view', 14597568, 16),
      ('2025-03-01'::date, 'dividende', 'https://drive.google.com/file/d/1nsdz-oxPTh9bzH-rrrMTwRelsBxCFwsP/view', 13902675, 15),
      ('2025-03-01'::date, 'efficient', 'https://drive.google.com/file/d/1TW6rAs49he7BiK9tFzhCeilN21k1iXKf/view', 15521580, 16),
      ('2025-04-01'::date, 'antifragile', 'https://drive.google.com/file/d/1H-M9tGZDzb_m41EoJKxk4DsoBY6wk1md/view', 14618704, 16),
      ('2025-04-01'::date, 'dividende', 'https://drive.google.com/file/d/1xMVoeIvDm0GEeMWwlh7XdMCQ0KVH9rkS/view', 14678566, 16),
      ('2025-04-01'::date, 'efficient', 'https://drive.google.com/file/d/1iNlXrsHS2UmFmksWYH0kHW1tzb7Ie-h0/view', 16287891, 17),
      ('2025-05-01'::date, 'antifragile', 'https://drive.google.com/file/d/1ExsBb-vSBtawC0LqLQlNifVIrQsEtvwU/view', 13891330, 15),
      ('2025-05-01'::date, 'dividende', 'https://drive.google.com/file/d/1sTT6ZLL1adi98t7BDvertBpBE52mzSxr/view', 13877443, 15),
      ('2025-05-01'::date, 'efficient', 'https://drive.google.com/file/d/1U_wUv8s-L173GlV05eSNfIfKi2YlqHw9/view', 13957800, 14),
      ('2025-06-01'::date, 'antifragile', 'https://drive.google.com/file/d/1nvJhiaCKpFf1egN1Bf4UXRmWgbe79iGk/view', 14663208, 16),
      ('2025-06-01'::date, 'dividende', 'https://drive.google.com/file/d/1hrx2gBkrX2MTz4mLOISY_N3IDYr87LpS/view', 14613528, 16),
      ('2025-06-01'::date, 'efficient', 'https://drive.google.com/file/d/1bmwCd09i2Ux6uzWmZu7376Oti4FrPq7y/view', 15510524, 16),
      ('2025-07-01'::date, 'antifragile', 'https://drive.google.com/file/d/1su7CEEPiSCCvJHJ5jkig3d3S2RnpgWr3/view', 13981449, 15),
      ('2025-07-01'::date, 'dividende', 'https://drive.google.com/file/d/1MJvMv-GMSC7UXrfXfpuaVst11NXId7qR/view', 13989825, 15),
      ('2025-07-01'::date, 'efficient', 'https://drive.google.com/file/d/1-W1OiEWN7_fABbI4J5g-2nS9Zno5A9Gt/view', 16305576, 17),
      ('2025-08-01'::date, 'antifragile', 'https://drive.google.com/file/d/11CJeXa1k3WhU1H-s9Ghyp6BVe55BDTG5/view', 14730798, 16),
      ('2025-08-01'::date, 'dividende', 'https://drive.google.com/file/d/14JxDp-KOjxmNHyLwAmkh1Wbrr9kkY3uv/view', 14728736, 16),
      ('2025-08-01'::date, 'efficient', 'https://drive.google.com/file/d/1m8Ebk3XUS7MBRXJAx-TU52SqscWvWX1b/view', 15601433, 16),
      ('2025-09-01'::date, 'antifragile', 'https://drive.google.com/file/d/1CaUw8DfqMMnRlnZkeSsKl0yMlEK9RT-T/view', 13980268, 15),
      ('2025-09-01'::date, 'dividende', 'https://drive.google.com/file/d/1OBvzZfhP4d7Q4MQq_UQ2ts17WtGyqKco/view', 13975183, 15),
      ('2025-09-01'::date, 'efficient', 'https://drive.google.com/file/d/1t_1XMN8bgMfqL1Uq_2fh8b9_FqbpiDdm/view', 15573205, 16),
      ('2025-10-01'::date, 'antifragile', 'https://drive.google.com/file/d/1ajK8RPDFsJarJvXFPNucV70yawxL7hMd/view', 14783363, 16),
      ('2025-10-01'::date, 'dividende', 'https://drive.google.com/file/d/1m1RhNfIfFPR7f8BtPKJLCfswjHbiOaoW/view', 14067595, 15),
      ('2025-10-01'::date, 'efficient', 'https://drive.google.com/file/d/173Iu70OMzO2PVNM3yFDNWejiLYEdpl6S/view', 15629244, 16),
      ('2025-11-01'::date, 'antifragile', 'https://drive.google.com/file/d/1zX15-b9xxvtK9FsaSZpPJr7RppaTvJ2n/view', 15532786, 17),
      ('2025-11-01'::date, 'dividende', 'https://drive.google.com/file/d/1UlJZcFVqYvRH5WbVKkPEMfoNZ9zACJzh/view', 14757553, 16),
      ('2025-11-01'::date, 'efficient', 'https://drive.google.com/file/d/1BA0qFdYCN0yd0HVRTegACsctldb2TgGc/view', 17930368, 19),
      ('2025-12-01'::date, 'antifragile', 'https://drive.google.com/file/d/1TqfyaAg9qsXbMmxmRxZChCATDvPAKlQa/view', 14799797, 16),
      ('2025-12-01'::date, 'dividende', 'https://drive.google.com/file/d/1kyHVMonJc_Gk79vMaNdeCU51l4El2dmI/view', 15445368, 17),
      ('2025-12-01'::date, 'efficient', 'https://drive.google.com/file/d/1rM-t5opft3suM0f15XYFUEiIUlwzagDh/view', 15618151, 16),
      ('2026-01-01'::date, 'antifragile', 'https://drive.google.com/file/d/1grBLq87H7jAGyYsapFmOoZF8RchghSYb/view', 15511097, 17),
      ('2026-01-01'::date, 'dividende', 'https://drive.google.com/file/d/1Pz_qcn-nRN71-8i-XitjS85FFNg8OdNn/view', 15483838, 17),
      ('2026-01-01'::date, 'efficient', 'https://drive.google.com/file/d/1HCr3Xm1UwlT8Y3SR-8A_HWekgVk8GcJQ/view', 16380628, 17),
      ('2026-02-01'::date, 'antifragile', 'https://drive.google.com/file/d/1pBAbR8nms0KrXhM8z9XjwEmuMhX3GTr2/view', 16847709, 19),
      ('2026-02-01'::date, 'dividende', 'https://drive.google.com/file/d/1q8nt3_jfi88_O1q67lTOz2sl14lMR_3t/view', 15398846, 17),
      ('2026-02-01'::date, 'efficient', 'https://drive.google.com/file/d/1i7GXEUkp0Pdtm-uEEipOUe1-Bdb33bws/view', 17082597, 18),
      ('2026-03-01'::date, 'antifragile', 'https://drive.google.com/file/d/1vcIVpI3b9xHgLNzc4uefyvz7s_WCmBur/view', 13312883, 14),
      ('2026-03-01'::date, 'dividende', 'https://drive.google.com/file/d/1lJ1Ua5Xyf_rzLTPCe1sgYsCI7if3WK8k/view', 13967336, 15),
      ('2026-03-01'::date, 'efficient', 'https://drive.google.com/file/d/1HNutnB7oylSb63JEqg9Fw1jaumACbxcR/view', 15550869, 16),
      ('2026-04-01'::date, 'antifragile', 'https://drive.google.com/file/d/1AWEYBBh67BuBarXnm_mFu7LKM6IC7GUw/view', 13293197, 14),
      ('2026-04-01'::date, 'dividende', 'https://drive.google.com/file/d/1-ACYAhQoUGHMN45UlfgU9R68U-ul4tI-/view', 13295490, 14),
      ('2026-04-01'::date, 'efficient', 'https://drive.google.com/file/d/1JPsav5gomyznbqUClVlF3WunhjRggppQ/view', 13996260, 14),
      ('2026-05-01'::date, 'antifragile', 'https://drive.google.com/file/d/1__oGD7kCBZ_jWsNXRyxSsQ0myYrLmh5b/view', 12505000, 13),
      ('2026-05-01'::date, 'dividende', 'https://drive.google.com/file/d/1qsBHRm-EeiHpsdQHDlmHqm0BNtXlNJl1/view', 13202185, 14),
      ('2026-05-01'::date, 'efficient', 'https://drive.google.com/file/d/1SOqstvcw7UuaO_Pj6ZZWy5LlkEtyt3C-/view', 13898696, 14),
      ('2026-06-01'::date, 'antifragile', 'https://drive.google.com/file/d/1wLLGqsijjirWEk2AJYCW7G_BrBBr5rq0/view', 12616931, 13),
      ('2026-06-01'::date, 'dividende', 'https://drive.google.com/file/d/1naQTdoI3LBim_ydEToi40epbC9QDL1so/view', 12611145, 13),
      ('2026-06-01'::date, 'efficient', 'https://drive.google.com/file/d/1Vnanql240CFauWUZU40RNy2kGOy30wTz/view', 13259572, 13),
      ('2026-07-01'::date, 'antifragile', 'https://drive.google.com/file/d/12OUiOrqz3aa1CZYb1R2gxLxJG6CutsCQ/view', 13320662, 14),
      ('2026-07-01'::date, 'dividende', 'https://drive.google.com/file/d/13PWwyLrnB7ksZmsTy3G8-pxgjgSNJ79U/view', 13304591, 14),
      ('2026-07-01'::date, 'efficient', 'https://drive.google.com/file/d/1OCGOplxwp2V9Je4Jv5qWtMlRenTRaQ8j/view', 14054458, 14),
      ('2026-08-01'::date, 'antifragile', 'https://drive.google.com/file/d/1K3lz1S4zpw45bj8n2Bbqm6-ANc2yBAjP/view', 12646736, 13),
      ('2026-08-01'::date, 'dividende', 'https://drive.google.com/file/d/1P3_LWZo62nqrPsCLQbkVPpxNndrCw94p/view', 13301035, 14),
      ('2026-08-01'::date, 'efficient', 'https://drive.google.com/file/d/1i6L1ZIsJfmygu-ynBevI-3H670mulEXY/view', 13305646, 13),
      ('2026-09-01'::date, 'antifragile', 'https://drive.google.com/file/d/1JMTQLrWKz81YjOKvlFNPIUCYnVmldJYJ/view', 14849342, 16),
      ('2026-09-01'::date, 'dividende', 'https://drive.google.com/file/d/1c60fihUIPDeF317E0mHBMUre8dlN2TFz/view', 14831530, 16),
      ('2026-09-01'::date, 'efficient', 'https://drive.google.com/file/d/12mzU-10DmYKH9ow6t7sXz430-V_MA_uj/view', 14942615, 15)
  )
  update public.plt_publication_report r
  set document_url    = d.document_url,
      file_size_bytes = d.file_size_bytes,
      page_count      = d.page_count
  from drive d
  join public.plt_publication p on p.month = d.month
  where r.publication_id = p.id
    and r.portfolio_key = d.portfolio_key;

  get diagnostics updated = row_count;

  if updated <> 99 then
    raise exception 'Rapports mis à jour : % sur 99 attendus', updated;
  end if;
end $$;

-- Revues annuelles. 2024 prend le résumé par défaut du backoffice ; les textes
-- de 2025 et 2026 ne sont pas modifiés (seules les colonnes du document sont
-- mises à jour).
insert into public.plt_annual_review
  (year, title, tag, blurb, document_url, file_size_bytes, page_count, published_at)
values
  (2024, 'Revue annuelle 2024', 'Publiée en septembre 2024',
   'Revue approfondie de chacune des entreprises en portefeuille : thèse d''investissement, résultats et perspectives.',
   'https://drive.google.com/file/d/1lDvR-ZNGcfhIpQzTDu0zWVIE6uQuG971/view', 139048648, 206, now()),
  (2025, 'Revue annuelle 2025', 'Exercice 2025',
   'Revue approfondie de chacune des entreprises en portefeuille : thèse d''investissement, résultats et perspectives.',
   'https://drive.google.com/file/d/1E1U1bMqYtjwcIiNn0tK_s9kYJ9-DvgV-/view', 141464292, 206, now()),
  (2026, 'Revue annuelle 2026', 'Exercice 2026',
   'Revue approfondie de chacune des entreprises en portefeuille : thèse d''investissement, résultats et perspectives.',
   'https://drive.google.com/file/d/1u73MnUI4dLZpG6LrrJFOzM5rgp1PcCur/view', 30641172, 283, now())
on conflict (year) do update
set document_url    = excluded.document_url,
    file_size_bytes = excluded.file_size_bytes,
    page_count      = excluded.page_count;
