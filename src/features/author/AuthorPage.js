import Section from "../../common/Section";
import { Wrapper } from "../../Wrapper";

function AuthorPage() {
    return (
        <Wrapper>
            <h1>O autorze</h1>
            <Section
                title="Donata Deptuła"
                body={
                    <>
                        <p>
                            Od dwóch lat rozwijam swoją pasję, jaką jest <strong>gra na pianinie</strong>. Uwielbiam muzykę klasyczną, która stanowi solidną podstawę mojej nauki, ale równie chętnie sięgam po utwory filmowe i muzykę z anime, by dodać różnorodności moim ćwiczeniom.
                        </p>
                        <p>
                            Największą radość sprawia mi odkrywanie coraz bardziej złożonych i wymagających kompozycji, które pozwalają mi nieustannie się rozwijać i czerpać ogromną satysfakcję z gry. 🎹
                        </p>
                    </>
                }
            />
        </Wrapper>
    );
}

export default AuthorPage;