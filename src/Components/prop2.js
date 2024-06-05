import Prijenos from "./prop1";

export default function Prip2({ pro }) {
    return(
        <div>
        <table border="1px" className="tabluno">
        <tr>
          <td>Harvey Specter's office</td>
          <td>Jessica Pearson's office</td>
          <td>Louis Litt's office</td>
          <td>Dana Scott's office</td>
          <td>Mike Ross's office</td>
          <td>Rachel Zane's office</td>
          <td>Alex Williams's office</td>
          <td>Zoe Lawford's office</td>
          <td>Katrina Bennett's office</td>
        </tr>
        <tr>
          <td>{pro.harvey}</td>
          <td>{pro.jessica}</td>
          <td>{pro.louis}</td>
          <td>{pro.Dana}</td>
          <td>{pro.Mike}</td>
          <td>{pro.Rachel}</td>
          <td>{pro.Alex}</td>
          <td>{pro.Zoe}</td>
          <td>{pro.Katrina}</td>
        </tr>
      </table>
        </div>
    );
}