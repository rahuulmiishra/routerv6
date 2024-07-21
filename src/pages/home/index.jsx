/* eslint-disable react/react-in-jsx-scope */

import { useLocation, useNavigate } from "react-router";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  const navi = useNavigate();

  const location = useLocation();

  console.log(location);

  return (
    <div className="list-card">
      <button
        onClick={() => {
          console.log("hey");
          navi("/list");
        }}
      >
        GO
      </button>
      <Link to="/list">Gos</Link>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum
      non sem ut lobortis. Quisque euismod magna eu fermentum dapibus. In
      ultricies odio in ipsum tincidunt, ut rutrum nibh tempor. Vestibulum
      vestibulum elit blandit dui rhoncus, sed bibendum odio ornare. Aenean
      ornare ipsum vel mollis suscipit. Nullam at eleifend eros, ut tristique
      libero. Praesent nec ipsum libero. Aenean a vestibulum nulla, eget
      accumsan magna. Integer non leo sodales, congue ex vel, pellentesque nibh.
      Nunc non ex sodales, ultricies mi vitae, sollicitudin massa. Nulla lacus
      purus, condimentum imperdiet tempus vel, ullamcorper non ex. Curabitur
      viverra malesuada purus quis lacinia. Praesent congue orci nec ornare
      tempor. Nunc arcu nisl, ultricies id gravida quis, dapibus a tellus.
      Aliquam erat volutpat. Integer ornare porta metus, a ultricies eros
      tincidunt ut. Ut cursus erat in nunc gravida, ac sagittis leo ullamcorper.
      Morbi nec laoreet nunc. Ut non vehicula felis. Maecenas et nulla et ex
      laoreet accumsan. Nullam arcu ex, mattis at neque vitae, gravida convallis
      massa. Nulla sed urna sollicitudin, dignissim nulla vel, consectetur
      neque. Donec porttitor ex et odio congue rhoncus. Mauris non justo id enim
      hendrerit hendrerit. Proin sollicitudin in purus eget vehicula. Proin a
      rhoncus tellus, et vulputate massa. Nulla laoreet auctor eros eu auctor.
      Donec condimentum mi in velit mollis tempor. Sed elementum arcu a dolor
      gravida, in interdum libero vulputate. Vestibulum mi enim, faucibus
      pretium dui vitae, ornare sagittis justo. Sed ex enim, fringilla non
      rhoncus nec, aliquet iaculis dolor. Vestibulum ornare nibh tortor. Nulla
      vitae rutrum libero. Mauris suscipit tempus justo non hendrerit. Aenean
      ullamcorper arcu gravida sapien interdum, vel euismod ante malesuada. Sed
      malesuada purus arcu, ac luctus ante maximus id. In ornare porta dui, nec
      ultrices odio cursus id. Vestibulum orci turpis, convallis vitae ex in,
      aliquam ultrices tortor. Vivamus aliquet, tellus quis mattis dapibus,
      sapien nisi luctus elit, volutpat cursus justo mi ut nisl. Fusce vel
      efficitur mi, quis suscipit erat. Duis volutpat tortor ut felis suscipit
      tincidunt. Mauris pharetra sem quis justo aliquam, sit amet tincidunt dui
      vestibulum. Sed enim purus, malesuada quis orci id, facilisis faucibus
      lectus. Pellentesque hendrerit quam id orci varius laoreet. Vivamus eget
      mattis massa. Nam venenatis ligula justo, ac ornare felis sodales
      fermentum. Praesent ut magna sapien. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Fusce metus enim,
      hendrerit sit amet convallis eu, imperdiet sit amet sapien. Vivamus
      interdum nibh sapien, at tristique libero rhoncus eu. Donec faucibus
      libero lacus, et tincidunt ligula hendrerit eu. Morbi eu nisi eget urna
      vestibulum efficitur quis in arcu. Cras erat ipsum, placerat in consequat
      in, sagittis vel mauris. Vivamus lacus purus, dignissim et malesuada vel,
      eleifend non augue. Praesent sit amet neque felis. Quisque molestie orci
      eu risus pharetra accumsan. Aenean a aliquet quam. In risus est, faucibus
      a fringilla eu, tempus at ante. Vivamus consequat turpis ut malesuada
      pulvinar. Nullam ac elit mauris. Vivamus et vulputate diam. Sed in
      suscipit est. Aenean at orci a mauris consectetur euismod id at metus.
      Nunc a libero vulputate, dictum augue nec, auctor nunc. Aenean et sapien
      nec ipsum posuere consectetur sed sed massa. Nunc erat enim, iaculis ac
      magna sit amet, hendrerit mattis nisl. Duis sollicitudin sodales diam id
      fermentum. Aenean consequat gravida cursus. Duis vehicula velit sapien, ut
      vestibulum dui mollis at. In luctus enim a posuere pharetra. Nunc aliquam,
      erat at iaculis cursus, felis est pretium turpis, sed condimentum turpis
      lectus vel ipsum. Aenean vel tristique ante. Suspendisse varius dictum
      quam ac tempor. Donec consectetur, lorem eget mollis rutrum, sapien elit
      pharetra mi, a cursus metus dui a sem. Vivamus sollicitudin velit nec
      semper posuere. Sed dignissim, ligula ut convallis posuere, purus nulla
      imperdiet justo, vel elementum ipsum turpis consequat turpis. Vestibulum
      mollis ultricies ornare. Suspendisse pretium dui id ex pulvinar elementum.
      Vivamus tempor fringilla elit. Ut quis leo venenatis, venenatis turpis a,
      blandit lorem. Etiam consequat volutpat tellus, in accumsan urna tincidunt
      eget. Pellentesque lobortis massa id sodales elementum. Nullam eu
      efficitur lacus. Mauris sollicitudin pulvinar nisi. Duis ultricies
      molestie orci, at consectetur urna rutrum quis. Praesent in odio
      elementum, aliquam lacus ut, condimentum libero. Ut sed tempus turpis.
      Suspendisse fringilla laoreet mauris vel tempus. Maecenas tincidunt, nisi
      sed rhoncus feugiat, lectus ligula ultricies nisl, aliquet venenatis est
      risus id velit. Cras interdum scelerisque suscipit. Sed maximus placerat
      velit at placerat. Morbi congue nulla rhoncus sem ullamcorper, ac
      tristique mauris suscipit. Sed egestas leo dignissim vehicula suscipit.
      Morbi non consequat urna. Ut fringilla, neque sit amet sodales vulputate,
      orci magna molestie mauris, sit amet venenatis leo magna at ligula.
      Integer hendrerit ipsum eu dui consectetur vestibulum. Nunc tortor diam,
      ultricies quis blandit sed, suscipit sit amet felis. Etiam hendrerit
      faucibus sem vel placerat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Pellentesque commodo pharetra nulla ut fermentum. Nam
      ultricies facilisis aliquet. Curabitur faucibus cursus nisl, vel malesuada
      augue accumsan vitae. Cras at metus pharetra, tincidunt nunc eget, congue
      enim. Donec interdum turpis et sapien dapibus, vitae fringilla odio
      interdum. Duis bibendum vehicula eros ut suscipit. Vestibulum eu
      condimentum eros. Curabitur turpis odio, luctus volutpat sapien id,
      suscipit dapibus nibh. Nulla condimentum eleifend efficitur. Vivamus quis
      dapibus sapien. Suspendisse et odio felis. Sed et lorem felis. Donec
      hendrerit tortor a iaculis suscipit. Donec vitae massa placerat, aliquam
      elit nec, dapibus velit. Suspendisse ut sollicitudin neque. Nullam diam
      dui, congue a massa quis, tempus lobortis tellus. Donec et nibh sit amet
      dui dignissim finibus et vel neque. Nulla ut felis nibh. Vivamus urna sem,
      posuere congue tellus in, sollicitudin venenatis diam. Cras et tortor et
      tortor pretium eleifend ac vel eros. Ut posuere nisi a velit tempus
      hendrerit. Proin scelerisque pulvinar ullamcorper. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Quisque molestie lorem sed ante consequat cursus. Duis feugiat augue orci,
      accumsan commodo tortor consequat at. Curabitur imperdiet risus at metus
      porta, eu tempus odio ullamcorper. Proin vitae enim quis nisl tincidunt
      semper. Mauris luctus convallis arcu eu ullamcorper. Cras pharetra lacus
      non lobortis tempor. Quisque porta, nibh iaculis sollicitudin vestibulum,
      nunc mi tincidunt ipsum, quis pretium ante arcu sed est. Ut at cursus ex.
      Nunc imperdiet pellentesque luctus. Curabitur sodales orci sit amet
      tincidunt porta. Praesent ornare odio rutrum placerat vulputate.
      Pellentesque vehicula ullamcorper dignissim. Vivamus et sem justo. Nulla
      consectetur feugiat quam vitae gravida. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Donec faucibus
      porttitor molestie. Donec aliquam dictum ligula eget tincidunt. Mauris
      blandit, erat id mollis rhoncus, arcu arcu pharetra nibh, sed fermentum
      lorem turpis ut nulla. Etiam semper turpis arcu, quis maximus lectus
      condimentum eu. Curabitur feugiat metus erat, non ullamcorper enim mollis
      et. Suspendisse blandit semper augue, eget viverra nibh facilisis eu. Ut
      augue neque, placerat non magna id, ultrices tincidunt velit. Ut lectus
      nisi, efficitur vel ipsum quis, auctor vulputate erat. Etiam et mi risus.
      Aenean vel ipsum lectus. Etiam rhoncus cursus sapien in suscipit. Sed
      lacus massa, accumsan a suscipit non, vestibulum eget nunc. Proin dapibus
      dolor ante, sit amet ullamcorper sem posuere id. Nam tincidunt lacinia
      justo in auctor. Nam laoreet felis ut augue semper, et pulvinar libero
      fringilla. Donec mollis porta ante sit amet ullamcorper. In ut congue
      turpis. Nam ut ligula sed metus suscipit viverra. Donec varius ultricies
      metus, eget blandit dui mollis a. In nec malesuada arcu, in tempor dui.
      Sed ac nulla imperdiet, suscipit odio vitae, efficitur urna. Aliquam sed
      hendrerit tortor. Donec vel risus nisi. Mauris posuere risus lorem, id
      egestas ligula vestibulum a. Ut commodo sodales porta. Nulla at justo at
      tellus fringilla aliquam in sed tellus. Nulla suscipit bibendum felis in
      porttitor. Cras in hendrerit urna. Nullam ac finibus dolor, in gravida
      leo. Nam bibendum maximus sem, sit amet ultrices enim pellentesque eget.
      Curabitur congue molestie elit sit amet sollicitudin. Proin cursus
      vestibulum metus nec malesuada. Cras vitae ligula ut tortor pretium
      vehicula quis at dui. Mauris sagittis odio mauris, sit amet commodo est
      accumsan ac. Quisque finibus lorem tempor lacus semper auctor. In
      efficitur augue ipsum, nec posuere ex varius ut. In porta libero augue,
      sed tempus leo convallis sit amet. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Vivamus lacus leo,
      lobortis vitae rutrum ut, feugiat et nunc. Sed tempor laoreet massa vitae
      volutpat. Donec dignissim turpis elementum, dignissim tortor ut, convallis
      nulla. Curabitur velit sapien, sodales at nisl at, commodo condimentum ex.
      Nulla finibus varius sem at porta. Nulla molestie lacinia elit, sit amet
      hendrerit orci bibendum at. In ac libero sit amet nibh dapibus iaculis et
      sit amet augue. Nunc maximus ligula ut quam posuere tincidunt. Morbi
      facilisis leo ex. Curabitur ac ex erat. Morbi at enim id turpis efficitur
      dictum. Pellentesque a finibus diam. Nam id elementum diam. Donec vitae
      sem nec eros vehicula feugiat ut sed ex. Nunc rutrum massa sit amet
      laoreet venenatis. Fusce vulputate pulvinar mauris eu cursus. Donec in
      elit dui. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Quisque quis diam eleifend, tincidunt
      elit eget, blandit odio. Donec congue neque imperdiet neque convallis, et
      ullamcorper felis ornare. Ut semper facilisis elementum. Donec ullamcorper
      dolor eget mauris bibendum elementum. Nam suscipit orci accumsan eros
      tempor pharetra eu nec tortor. Morbi sed metus ac sem iaculis fringilla
      non et arcu. Suspendisse ultrices, tellus id viverra porta, lacus neque
      semper nulla, at pharetra nibh sapien ac leo. Nullam ultricies lobortis
      neque non malesuada. Morbi non suscipit est, a vehicula nibh. Vivamus eget
      pulvinar lectus, eu accumsan odio. Etiam tincidunt et dui ut feugiat.
      Pellentesque ut fringilla magna. Fusce mollis ipsum dolor, sed aliquam
      risus ullamcorper in. Morbi vestibulum fermentum metus sed faucibus.
      Curabitur eget mattis nibh. Quisque et augue blandit, pellentesque eros
      vitae, tempus lorem. Morbi a purus in neque imperdiet vehicula. Curabitur
      sit amet velit justo. Ut vel elit cursus, placerat nisi sit amet, cursus
      elit. Nunc tincidunt varius nisl, sit amet lacinia sem auctor eu. In hac
      habitasse platea dictumst. Integer faucibus nunc augue, vitae lacinia elit
      condimentum ultrices. Fusce mollis tincidunt ipsum, faucibus congue sapien
      pulvinar quis. Etiam in sapien ac odio congue porttitor. Maecenas vel
      risus euismod, commodo nulla non, varius arcu. Vestibulum tincidunt mi id
      elit tincidunt, et dapibus sapien elementum. Aenean finibus vitae mi a
      ultrices. Praesent eu rutrum ante. Etiam ut mollis turpis. Praesent
      bibendum elit odio, in ultricies diam imperdiet vel. Vestibulum dapibus
      tortor vel tincidunt cursus. Proin porta, leo non varius commodo, leo nisi
      ultricies risus, posuere maximus ipsum velit a mi.
    </div>
  );
}

export default Home;
