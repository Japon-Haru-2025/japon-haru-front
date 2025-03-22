"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/client"; // Assurez-vous que ce chemin est correct
import imgPhoto from "../public/Logo_Ecole_de_Provence.png";

import "../styles/article.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ArticleAccueil = ({ posts }) => {
    return (
        <section className="articleAccueil">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Nos Articles</h2>

                <div className="row">
                    {posts.map((post) => (
                        <div key={post._id} className="col-md-6 col-lg-4 mb-4">
                            <Link href={`/article/${post.slug.current}`} passHref>
                                <div className="card">
                                    <Image
                                        src={post.image ? urlFor(post.image).width(400).height(250).url() : imgPhoto}
                                        alt={post.title}
                                        style={{ objectFit: "cover" }}
                                        className="card-img"
                                        width={400}
                                        height={250}
                                    />
                                    <div className="overlay">
                                        <h5>{post.title}</h5>
                                        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <Link className="lienArticles" href="/articlesblog">
                    <p>Voir tous nos articles</p>
                </Link>
            </div>
        </section>
    );
};

export default ArticleAccueil;
