import React from "react";




const Componet1 = ()=>{
    return(
        <>
        <div className="absolute top-[556px] left-[0px] w-[1440px] h-[431px] overflow-hidden text-[36px] font-league-gothic">
        <img
          className="absolute top-[3px] left-[160px] w-[442px] h-[428px] object-cover"
          alt=""
          src="/mesa-de-trabajo-1-1@2x.png"
        />
        <div className="absolute top-[107px] left-[669px] tracking-[0.03em] leading-[95.5%] capitalize">
          <p className="[margin-block-start:0] [margin-block-end:122px]">{`Recevez jusqu’a 100 dt de Prime `}</p>
          <p className="m-0">Covoiturage!</p>
        </div>
        <div className="absolute top-[203px] left-[669px] text-sm tracking-[-0.03em] leading-[0%] font-archivo text-lightslategray">
          <p className="[margin-block-start:0] [margin-block-end:22px]">{`Conducteurs, conductrices, bonne nouvelle : vos bonnes habitudes sont `}</p>
          <p className="[margin-block-start:0] [margin-block-end:22px]">{`récompensées ! Bénéficiez de la Prime Covoiturage en réalisant 3 `}</p>
          <p className="m-0">
            covoiturages en 3 mois, voir les conditions d'éligibilité.
          </p>
        </div>
        <button className="cursor-pointer [border:none] py-0 px-[31px] bg-orchid absolute top-[297px] left-[859px] rounded-6xl w-[145px] h-[50px] flex flex-col items-center justify-center box-border hover:bg-mediumorchid-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="relative text-mini tracking-[-0.04em] leading-[145.5%] font-archivo text-white text-left">
            Learn More
          </div>
        </button>
      </div>

        </>
    )
}

export default Componet1