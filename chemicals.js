const chemicals = [
  {
    name: "RMR-86",
    manufacturer: "RMR Solutions",
    category: "Mold & Mildew Cleaner",
    file: "sds/RMR 86 SDS.pdf"
  },
  {
    name: "3M Neutral Quat Disinfectant Cleaner Concentrate",
    manufacturer: "3M",
    category: "Disinfectant / Cleaner",
    file: "3M Neutral Quat Disinfectant Cleaner Concentrate.pdf"
  },
  {
    name: "Oster Spray Disinfectant",
    manufacturer: "Oster",
    category: "Disinfectant",
    file: "A00224 OSTER SPRAY DSNF BTY 76300-102.pdf"
  },
  {
    name: "Accel Five TB Wipes",
    manufacturer: "Unknown",
    category: "Disinfectant Wipes",
    file: "Accel® Five TB Wipes.pdf"
  },
  {
    name: "Acid Toilet Bowl Cleaner",
    manufacturer: "Unknown",
    category: "Restroom Cleaner",
    file: "Acid Toilet Bowl Cleaner (EPA Reg No. 8155-6-89900).pdf"
  },
  {
    name: "AseptiCare TB+II",
    manufacturer: "Unknown",
    category: "Disinfectant",
    file: "ASEPTICARE TB+II.pdf"
  },
  {
    name: "Birex Quat Wipes",
    manufacturer: "Unknown",
    category: "Disinfectant Wipes",
    file: "Birex® Quat Wipes.pdf"
  },
  {
    name: "CaviCide",
    manufacturer: "Metrex",
    category: "Disinfectant / Cleaner",
    file: "CaviCide™ Desident™ CaviCide.pdf"
  },
  {
    name: "CaviWipes",
    manufacturer: "Metrex",
    category: "Disinfectant Wipes",
    file: "CaviWipes.pdf"
  },
  {
    name: "Chevron 1540 Oil",
    manufacturer: "Chevron",
    category: "Oil / Lubricant",
    file: "Chevron 1540 Oil SDS.pdf"
  },
  {
    name: "Citro Shield Furniture Polish",
    manufacturer: "Unknown",
    category: "Furniture Care",
    file: "CITRO SHIELD FURNITURE POLISH.pdf"
  },
  {
    name: "Clorox Disinfecting Wipes - Fresh Scent",
    manufacturer: "Clorox",
    category: "Disinfectant Wipes",
    file: "Clorox Disinfecting Wipes, Fresh Scent.pdf"
  },
  {
    name: "Clorox Germicidal Bleach",
    manufacturer: "Clorox",
    category: "Bleach / Disinfectant",
    file: "Clorox Germicidal Bleach.pdf"
  },
  {
    name: "Clorox Healthcare Bleach Germicidal Wipes",
    manufacturer: "Clorox",
    category: "Disinfectant Wipes",
    file: "Clorox Healthcare Bleach Germicidal Wipes.pdf"
  },
  {
    name: "Clorox Healthcare Hydrogen Peroxide Cleaner Disinfectant Wipes",
    manufacturer: "Clorox",
    category: "Disinfectant Wipes",
    file: "Clorox Healthcare Hydrogen Peroxide Cleaner Disinfectant Wipes.pdf"
  },
  {
    name: "Common Salt without Additives",
    manufacturer: "Unknown",
    category: "Water Treatment / Testing",
    file: "Common Salt without Additives.pdf"
  },
  {
    name: "Continuum AT3246",
    manufacturer: "Unknown",
    category: "Water Treatment",
    file: "CONTINUUM AT3246.pdf"
  },
  {
    name: "CorrShield NT4207",
    manufacturer: "Unknown",
    category: "Water Treatment",
    file: "CORRSHIELD NT4207.pdf"
  },
  {
    name: "Crew Bathroom Disinfectant Cleaner",
    manufacturer: "Diversey",
    category: "Restroom Cleaner / Disinfectant",
    file: "Crew® Bathroom Disinfectant Cleaner.pdf"
  },
  {
    name: "Dawn Dish Soap",
    manufacturer: "Procter & Gamble",
    category: "Cleaning",
    file: "Dawn Dish Soap SDS.pdf"
  },
  {
    name: "Dial",
    manufacturer: "Dial",
    category: "Hand Soap / Cleaning",
    file: "Dial.pdf"
  },
  {
    name: "Diesel Fuel",
    manufacturer: "Unknown",
    category: "Fuel",
    file: "Diesel Fuel.pdf"
  },
  {
    name: "Dispatch Hospital Cleaner Disinfectant Towels with Bleach",
    manufacturer: "Clorox",
    category: "Disinfectant Wipes",
    file: "Dispatch Hospital Cleaner Disinfectant Towels with Bleach.pdf"
  },
  {
    name: "DOWSIL P5200 Adhesion Promoter Clear",
    manufacturer: "DOWSIL",
    category: "Adhesive / Primer",
    file: "DOWSIL P5200 Adhesion Promoter Clear-Safety Data Sheet-EN.pdf"
  },
  {
    name: "Drano Liquid Drain Cleaner",
    manufacturer: "SC Johnson",
    category: "Drain Cleaner",
    file: "DRANO® LIQUID DRAIN CLEANER.pdf"
  },
  {
    name: "Electrode Storage Solution",
    manufacturer: "Unknown",
    category: "Testing / Laboratory",
    file: "Electrode Storage Solution.pdf"
  },
  {
    name: "Ferroin Indicator Solution",
    manufacturer: "Unknown",
    category: "Testing / Laboratory",
    file: "Ferroin Indicator Solution.pdf"
  },
  {
    name: "General Purpose Spotter",
    manufacturer: "Unknown",
    category: "Spot / Stain Cleaner",
    file: "General Purpose Spotter.pdf"
  },
  {
    name: "Geocel 4600 Structural Adhesive",
    manufacturer: "Geocel",
    category: "Adhesive / Sealant",
    file: "Geocel 4600 Structural Adhesive.pdf"
  },
  {
    name: "Glade Fabric & Air Odor Eliminator",
    manufacturer: "SC Johnson",
    category: "Odor Eliminator",
    file: "GLADE® FABRIC & AIR ODOR ELIMINATOR (All fragrances).pdf"
  },
  {
    name: "GOJO Honey Almond Foam Soap",
    manufacturer: "GOJO",
    category: "Hand Soap",
    file: "GOJO® Honey Almond Foam Soap.pdf"
  },
  {
    name: "GOJO Premium Foam Antibacterial Handwash",
    manufacturer: "GOJO",
    category: "Antibacterial Hand Soap",
    file: "GOJO® Premium Foam Antibacterial Handwash.pdf"
  },
  {
    name: "Gum Remover",
    manufacturer: "Unknown",
    category: "Specialty Cleaner",
    file: "Gum Remover.pdf"
  },
  {
    name: "Hardness Buffer Solution",
    manufacturer: "Unknown",
    category: "Water Testing",
    file: "Hardness Buffer Solution.pdf"
  },
  {
    name: "Hardness Indicator Powder",
    manufacturer: "Unknown",
    category: "Water Testing",
    file: "Hardness Indicator Powder.pdf"
  },
  {
    name: "Hardness Titrant 1DR",
    manufacturer: "Unknown",
    category: "Water Testing",
    file: "Hardness Titrant 1DR.pdf"
  },
  {
    name: "Hardness Titrant",
    manufacturer: "Unknown",
    category: "Water Testing",
    file: "Hardness Titrant.pdf"
  },
  {
    name: "Hydrogen Peroxide",
    manufacturer: "Unknown",
    category: "Chemical / Disinfectant",
    file: "Hydrogen Peroxide.pdf"
  },
  {
    name: "Isopropyl Rubbing Alcohol USP 70%",
    manufacturer: "Unknown",
    category: "Alcohol / Disinfectant",
    file: "Isopropyl Rubbing Alcohol USP 70%.pdf"
  },
  {
    name: "Maxim Super San Plus Sanitizing Solution",
    manufacturer: "Unknown",
    category: "Sanitizer",
    file: "Maxim Super San Plus Sanitizing Solution.pdf"
  },
  {
    name: "NABC Non-Acid Disinfectant Bathroom Cleaner",
    manufacturer: "Unknown",
    category: "Restroom Cleaner / Disinfectant",
    file: "NABC NON-ACID DISINFECTANT BATHROOM CLEANER.pdf"
  },
  {
    name: "Nitrite Titrant",
    manufacturer: "Unknown",
    category: "Water Testing",
    file: "Nitrite Titrant.pdf"
  },
  {
    name: "Non-acid Toilet Bowl & Washroom Cleaner",
    manufacturer: "Unknown",
    category: "Restroom Cleaner",
    file: "Non-acid Toilet Bowl & Washroom Cleaner.pdf"
  },
  {
    name: "Oxivir 1 Wipes",
    manufacturer: "Diversey",
    category: "Disinfectant Wipes",
    file: "Oxivir® 1 Wipes.pdf"
  },
  {
    name: "Oxivir TB Wipes",
    manufacturer: "Diversey",
    category: "Disinfectant Wipes",
    file: "Oxivir® TB Wipes.pdf"
  },
  {
    name: "OxyCide Daily Disinfectant Cleaner",
    manufacturer: "Unknown",
    category: "Disinfectant / Cleaner",
    file: "OXYCIDE DAILY DISINFECTANT CLEANER.pdf"
  },
  {
    name: "PDI Sani-Cloth Bleach Germicidal Disposable Wipe",
    manufacturer: "PDI",
    category: "Disinfectant Wipes",
    file: "PDI Sani-Cloth Bleach Germicidal Disposable Wipe.pdf"
  },
  {
    name: "Phosphoric Acid 85%",
    manufacturer: "Unknown",
    category: "Acid / Chemical",
    file: "Phosphoric Acid 85%.pdf"
  },
  {
    name: "Premier 1.3",
    manufacturer: "Unknown",
    category: "Other",
    file: "Premier 1.3.pdf"
  },
  {
    name: "Propane",
    manufacturer: "Unknown",
    category: "Fuel / Gas",
    file: "Propane.pdf"
  },
  {
    name: "Pure Bright Germicidal Ultra Bleach",
    manufacturer: "Unknown",
    category: "Bleach / Disinfectant",
    file: "Pure Bright Germicidal Ultra Bleach.pdf"
  },
  {
    name: "Renown Waterbased Aerosol Stainless Steel",
    manufacturer: "Renown",
    category: "Stainless Steel Cleaner",
    file: "RENOWN WATERBASED AEROSOL STAINLESS STEEL.pdf"
  },
  {
    name: "Rust Aid Gel Trigger",
    manufacturer: "Unknown",
    category: "Rust Remover",
    file: "Rust Aid Gel Trigger.pdf"
  },
  {
    name: "Sani-Cloth Plus Germicidal Disposable Cloth",
    manufacturer: "PDI",
    category: "Disinfectant Wipes",
    file: "Sani-Cloth Plus Germicidal Disposable Cloth.pdf"
  },
  {
    name: "SC Johnson Professional Heavy Duty Neutral Floor Cleaner",
    manufacturer: "SC Johnson Professional",
    category: "Floor Cleaner",
    file: "SC Johnson Professional Heavy Duty Neutral Floor Cleaner.pdf"
  },
  {
    name: "SC Johnson Professional TruShot 2.0 Power Cleaner & Degreaser End Use Dilution",
    manufacturer: "SC Johnson Professional",
    category: "Cleaner / Degreaser",
    file: "SC Johnson Professional Trushot 2.0 Power Cleaner & Degreaser End Use Dilution.pdf"
  },
  {
    name: "SC Johnson Professional TruShot Non-Ammoniated Glass Cleaner",
    manufacturer: "SC Johnson Professional",
    category: "Glass Cleaner",
    file: "SC Johnson Professional Trushot™ Non-Ammoniated Glass Cleaner.pdf"
  },
  {
    name: "SC Johnson Professional TruShot Restroom Cleaner End Use Dilution",
    manufacturer: "SC Johnson Professional",
    category: "Restroom Cleaner",
    file: "SC Johnson Professional Trushot™ Restroom Cleaner End Use Dilution.pdf"
  },
  {
    name: "SC Johnson Professional Ready-To-Use Multi-Surface Floor Finish",
    manufacturer: "SC Johnson Professional",
    category: "Floor Finish",
    file: "SC Johnson Professional® Ready-To-Use Multi-Surface Floor Finish.pdf"
  },
  {
    name: "SC Johnson Professional Carpet Extraction Cleaner Concentrate",
    manufacturer: "SC Johnson Professional",
    category: "Carpet Cleaner",
    file: "SC Johnson Professional™ Carpet Extraction Cleaner Concentrate.pdf"
  },
  {
    name: "SC Johnson Professional General Purpose Neutral",
    manufacturer: "SC Johnson Professional",
    category: "General Purpose Cleaner",
    file: "SC JOHNSON PROFESSIONAL™ GENERAL PURPOSE NEUTRAL.pdf"
  },
  {
    name: "Sheila Shine Aerosol",
    manufacturer: "Sheila Shine",
    category: "Stainless Steel Cleaner / Polish",
    file: "Sheila Shine (Aerosol).pdf"
  },
  {
    name: "Sheila Shine Low VOC Aerosol",
    manufacturer: "Sheila Shine",
    category: "Stainless Steel Cleaner / Polish",
    file: "Sheila Shine Low VOC (Aerosol).pdf"
  },
  {
    name: "Spectrus NX1106",
    manufacturer: "Unknown",
    category: "Water Treatment",
    file: "Spectrus NX1106.pdf"
  },
  {
    name: "SSS VSD Coolant",
    manufacturer: "Unknown",
    category: "Coolant",
    file: "SSS VSD Coolant.pdf"
  },
  {
    name: "Stainless Steel Cleaner and Polish",
    manufacturer: "Unknown",
    category: "Stainless Steel Cleaner / Polish",
    file: "Stainless Steel Cleaner and Polish.pdf"
  },
  {
    name: "Super Sani-Cloth Germicidal Wipes",
    manufacturer: "PDI",
    category: "Disinfectant Wipes",
    file: "Super Sani-Cloth Germicidal Wipes.pdf"
  },
  {
    name: "Superior High Shine Stainless Steel Cleaner & Polish",
    manufacturer: "Unknown",
    category: "Stainless Steel Cleaner / Polish",
    file: "SUPERIOR HIGH SHINE STAINLESS STEEL CLEANER & POLISH.pdf"
  },
  {
    name: "Tetrafluoroethane R-134a",
    manufacturer: "Unknown",
    category: "Refrigerant",
    file: "Tetrafluoroethane R-134a.pdf"
  },
  {
    name: "TruFill Hyper-Concentrated Floor Cleaner End Use Dilution",
    manufacturer: "Unknown",
    category: "Floor Cleaner",
    file: "TruFill Hyper-Concentrated Floor Cleaner End Use Dilution.pdf"
  },
  {
    name: "Viraguard Disinfectant Towelettes",
    manufacturer: "Unknown",
    category: "Disinfectant Wipes",
    file: "Viraguard Disinfectant Towelettes.pdf"
  },
  {
    name: "Virex T",
    manufacturer: "Diversey",
    category: "Disinfectant / Cleaner",
    file: "Virex® T.pdf"
  },
  {
    name: "Virox 5 RTU Wipes",
    manufacturer: "Virox",
    category: "Disinfectant Wipes",
    file: "Virox 5 RTU Wipes.pdf"
  },
  {
    name: "WD-40 Multi-Use Product Trigger",
    manufacturer: "WD-40",
    category: "Lubricant / Maintenance",
    file: "WD-40 Multi-Use Product TRIGGER.pdf"
  },
  {
    name: "WOW! Stainless Steel Cleaner and Protectant",
    manufacturer: "Unknown",
    category: "Stainless Steel Cleaner / Protectant",
    file: "WOW! Stainless Steel Cleaner and Protectant.pdf"
  }
  ,
{
  name: "Magic Eraser",
  manufacturer: "Mr. Clean / Procter & Gamble",
  category: "Cleaning",
  file: "Magic Eraser ENG.pdf"
},
{
  name: "Neutral Floor Cleaner",
  manufacturer: "SC Johnson Professional",
  category: "Floor Cleaner",
  files: [
    {
      label: "English SDS",
      file: "Neutral Floor Cleaner ENG.pdf"
    },
    {
      label: "Spanish SDS",
      file: "Neutral Floor Cleaner SPA.pdf"
    }
  ]
},
{
  name: "SCJ Carpet Spotter",
  manufacturer: "SC Johnson Professional",
  category: "Carpet / Spot Cleaner",
  files: [
    {
      label: "English SDS",
      file: "SCJ Carpet Spotter ENG.pdf"
    },
    {
      label: "Spanish SDS",
      file: "SCJ Carpet Spotter SPA.pdf"
    }
  ]
},
{
  name: "SCJ Fabric & Air Odor Control",
  manufacturer: "SC Johnson Professional",
  category: "Odor Control",
  files: [
    {
      label: "English SDS",
      file: "SCJ Fabric & Air Odor Control ENG.pdf"
    },
    {
      label: "Spanish SDS",
      file: "SCJ Fabric & Air Odor Control SPA.pdf"
    }
  ]
},
{
  name: "SCJ Floor Finish Plus Sealer",
  manufacturer: "SC Johnson Professional",
  category: "Floor Finish / Sealer",
  files: [
    {
      label: "English SDS",
      file: "SCJ Floor Finish Plus Sealer ENG.pdf"
    },
    {
      label: "Spanish SDS",
      file: "SCJ Floor Finish Plus Sealer SPA.pdf"
    }
  ]
},
{
  name: "SCJ Heavy Duty Floor Cleaner Squeeze & Pour",
  manufacturer: "SC Johnson Professional",
  category: "Floor Cleaner",
  files: [
    {
      label: "English SDS",
      file: "SCJ Heavy Duty Floor Cleaner Squeeze & Pour ENG.pdf"
    },
    {
      label: "Spanish SDS",
      file: "SCJ Heavy Duty Floor Cleaner Squeeze & Pour SPA.pdf"
    }
  ]
},
{
  name: "SCJ Hyper Concentrate Floor Stripper",
  manufacturer: "SC Johnson Professional",
  category: "Floor Stripper",
  files: [
    {
      label: "English SDS",
      file: "SCJ Hyper Concentrate Floor Stripper ENG.pdf"
    },
    {
      label: "Spanish SDS",
      file: "SCJ Hyper Concentrate Floor Stripper SPA.pdf"
    }
  ]
},


];
