import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setic</td>
            <td className="income">R$ 5750,00</td>
            <td>Salário</td>
            <td>29/09/21</td>
          </tr>
          <tr>
            <td>GIGO</td>
            <td className="income">R$ 3000,00</td>
            <td>Freela</td>
            <td>10/10/21</td>
          </tr>
          <tr>
            <td>PAP Digital</td>
            <td className="income">R$ 300,00</td>
            <td>Freela</td>
            <td>24/09/21</td>
          </tr>
          <tr>
            <td>Portal Sumup L.A</td>
            <td className="income">R$ 641,00</td>
            <td>Freela</td>
            <td>16/09/21</td>
          </tr>
          <tr>
            <td>Parcela da casa</td>
            <td className="outcome">- R$ 1000,00</td>
            <td>Despesa fixa</td>
            <td>01/08/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
