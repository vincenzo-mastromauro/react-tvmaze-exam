import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShowById } from "../../../Api/_service";
import { ShowDetailType } from "../../../Api/_service";

const DetailPage = () => {
  const { showId } = useParams();
  const [showDetail, setShowDetail] = useState<ShowDetailType | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!!showId) {
      try {
        const showIdNum = parseInt(showId);
        getShowById(showIdNum).then((show) => {
          setShowDetail(show);
        });
      } catch (err) {
        console.error("NaN");
      }
    }
  }, [showId]);

  return !!showDetail ? (
    <div className='detail-wrapper'>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>{showDetail?.title}</h2>
      <img src={showDetail?.image} alt={showDetail?.title} />
      <p>{showDetail?.summary!.replace(/<\/?[^>]+(>|$)/g, "")}</p>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default DetailPage;
